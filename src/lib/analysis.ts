/**
 * Document analysis engine.
 * Extracts text from PDF/DOCX/images and applies a keyword-based risk rules engine
 * to produce a deterministic risk score and structured findings.
 */

import { NormalizedFinding } from "./findings";

// ---------------------------------------------------------------------------
// Risk rules — configurable keyword lists
// ---------------------------------------------------------------------------

/** High-severity fraud indicators */
const HIGH_RISK_KEYWORDS = [
  "fraudulent",
  "forged",
  "counterfeit",
  "money laundering",
  "terrorist",
  "sanction",
  "embargo",
  "prohibited goods",
  "illicit",
  "fake invoice",
  "shell company",
  "bribery",
  "corruption",
];

/** Medium-severity warning indicators */
const MEDIUM_RISK_KEYWORDS = [
  "urgent payment",
  "wire transfer",
  "advance payment",
  "no refund",
  "no return",
  "non-refundable",
  "confidential",
  "immediate transfer",
  "off-shore",
  "offshore account",
  "bearer",
  "cash only",
  "crypto",
  "bitcoin",
  "untraceable",
];

/** Low-severity informational indicators */
const LOW_RISK_KEYWORDS = [
  "amendment",
  "addendum",
  "revised",
  "correction",
  "void",
  "cancelled",
  "duplicate",
  "copy only",
];

// ---------------------------------------------------------------------------
// Text extraction helpers
// ---------------------------------------------------------------------------

/**
 * Extract plain text from a PDF buffer using pdf-parse.
 * Returns an empty string on failure rather than throwing.
 */
async function extractFromPDF(buffer: Buffer): Promise<string> {
  try {
    // Dynamic import to avoid issues with Next.js server-side rendering
    const pdfParse = (await import("pdf-parse")).default;
    const data = await pdfParse(buffer);
    return data.text ?? "";
  } catch {
    return "";
  }
}

/**
 * Extract plain text from a DOCX buffer using mammoth.
 * Returns an empty string on failure.
 */
async function extractFromDOCX(buffer: Buffer): Promise<string> {
  try {
    const mammoth = await import("mammoth");
    const result = await mammoth.extractRawText({ buffer });
    return result.value ?? "";
  } catch {
    return "";
  }
}

/**
 * Mock OCR for image files (JPG/PNG).
 * In production, replace with a real OCR service (e.g. Google Cloud Vision, Tesseract.js).
 */
function extractFromImage(): string {
  return "[Image document — OCR not available in MVP. Manual review recommended.]";
}

// ---------------------------------------------------------------------------
// Analysis engine
// ---------------------------------------------------------------------------

export interface AnalysisResult {
  riskScore: number;
  riskLabel: "Low Risk" | "Medium Risk" | "High Risk" | "Critical Risk";
  extractedText: string;
  findings: NormalizedFinding[];
  documentType: string;
  analysisMethod: string;
}

/**
 * Analyse a document buffer and return structured risk data.
 */
export async function analyzeDocument(
  buffer: Buffer,
  mimeType: string,
  fileName: string
): Promise<AnalysisResult> {
  // --- 1. Extract text ---
  let text = "";
  let documentType = "Unknown";
  let analysisMethod = "text-extraction";

  if (mimeType === "application/pdf" || fileName.endsWith(".pdf")) {
    text = await extractFromPDF(buffer);
    documentType = "PDF Document";
  } else if (
    mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    fileName.endsWith(".docx")
  ) {
    text = await extractFromDOCX(buffer);
    documentType = "Word Document";
  } else if (mimeType.startsWith("image/")) {
    text = extractFromImage();
    documentType = "Image";
    analysisMethod = "mock-ocr";
  } else {
    text = "[Unsupported format — could not extract text]";
    documentType = "Unknown Format";
  }

  const lowerText = text.toLowerCase();

  // --- 2. Apply risk rules ---
  const findings: NormalizedFinding[] = [];
  let riskPoints = 0;

  // Check high-risk keywords
  for (const kw of HIGH_RISK_KEYWORDS) {
    if (lowerText.includes(kw)) {
      riskPoints += 20;
      findings.push({
        message: `High-risk indicator detected: "${kw}"`,
        severity: "high",
        type: "warning",
      });
    }
  }

  // Check medium-risk keywords
  for (const kw of MEDIUM_RISK_KEYWORDS) {
    if (lowerText.includes(kw)) {
      riskPoints += 8;
      findings.push({
        message: `Elevated-risk pattern detected: "${kw}"`,
        severity: "medium",
        type: "warning",
      });
    }
  }

  // Check low-risk keywords
  for (const kw of LOW_RISK_KEYWORDS) {
    if (lowerText.includes(kw)) {
      riskPoints += 3;
      findings.push({
        message: `Document modification indicator: "${kw}"`,
        severity: "low",
        type: "info",
      });
    }
  }

  // --- 3. Document integrity checks ---
  if (text.trim().length === 0) {
    riskPoints += 15;
    findings.push({
      message: "No readable text found. Document may be scanned, encrypted, or tampered.",
      severity: "high",
      type: "warning",
    });
  }

  if (text.length > 0 && text.length < 200) {
    riskPoints += 5;
    findings.push({
      message: "Document contains very little text. Manual review recommended.",
      severity: "medium",
      type: "info",
    });
  }

  // --- 4. Positive signals ---
  if (findings.length === 0 && text.length > 200) {
    findings.push({
      message: "No suspicious keywords detected in document.",
      severity: "low",
      type: "success",
    });
  }

  if (analysisMethod === "text-extraction" && text.length > 500) {
    findings.push({
      message: "Document text successfully extracted and scanned.",
      severity: "low",
      type: "success",
    });
  }

  if (analysisMethod === "mock-ocr") {
    findings.push({
      message: "Image documents require manual verification. OCR processing not available.",
      severity: "medium",
      type: "info",
    });
  }

  // --- 5. Compute final score ---
  const riskScore = Math.min(100, riskPoints);

  const riskLabel =
    riskScore < 25
      ? "Low Risk"
      : riskScore < 50
      ? "Medium Risk"
      : riskScore < 75
      ? "High Risk"
      : "Critical Risk";

  return {
    riskScore,
    riskLabel,
    extractedText: text.substring(0, 2000), // return first 2000 chars only
    findings,
    documentType,
    analysisMethod,
  };
}
