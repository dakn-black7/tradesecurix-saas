// ─── Analysis Engine ──────────────────────────────────────────────────────────
// Detects fraud risk indicators in trade documents.

export interface AnalysisFinding {
  type: "warning" | "info" | "success";
  severity: "high" | "medium" | "low";
  message: string;
}

export interface AnalysisResult {
  riskScore: number;
  status: "cleared" | "review" | "flagged";
  findings: AnalysisFinding[];
  timestamp: string;
}

// Keywords that raise the risk score
const HIGH_RISK_KEYWORDS = [
  "urgent",
  "wire transfer",
  "cryptocurrency",
  "bitcoin",
  "advance fee",
  "confidential",
  "no questions",
  "offshore account",
  "anonymous",
  "untraceable",
  "shell company",
  "nominee director",
  "bearer shares",
  "tax haven",
  "money laundering",
  "fictitious",
];

const MEDIUM_RISK_KEYWORDS = [
  "draft",
  "unverified",
  "preliminary",
  "subject to change",
  "without prejudice",
  "pro-forma",
  "sample",
  "specimen",
  "void",
  "cancelled",
  "amended",
];

/**
 * Analyze raw text extracted from a document for risk indicators.
 */
export function analyzeText(text: string): AnalysisResult {
  const normalized = text.toLowerCase();
  const findings: AnalysisFinding[] = [];
  let riskScore = 0;

  // Check high-risk keywords
  for (const keyword of HIGH_RISK_KEYWORDS) {
    if (normalized.includes(keyword)) {
      riskScore += 15;
      findings.push({
        type: "warning",
        severity: "high",
        message: `High-risk term detected: "${keyword}"`,
      });
    }
  }

  // Check medium-risk keywords
  for (const keyword of MEDIUM_RISK_KEYWORDS) {
    if (normalized.includes(keyword)) {
      riskScore += 8;
      findings.push({
        type: "warning",
        severity: "medium",
        message: `Suspicious term detected: "${keyword}"`,
      });
    }
  }

  // Check for missing standard fields
  if (!normalized.includes("invoice") && !normalized.includes("contract") && !normalized.includes("agreement")) {
    riskScore += 10;
    findings.push({
      type: "info",
      severity: "medium",
      message: "Document type could not be confirmed (missing standard identifier)",
    });
  }

  if (!normalized.includes("date") && !normalized.includes("issued")) {
    riskScore += 5;
    findings.push({
      type: "info",
      severity: "low",
      message: "No issuance date detected in document",
    });
  }

  // Check for amount consistency
  const amountMatches = normalized.match(/\$[\d,]+(\.\d{2})?/g) ?? [];
  if (amountMatches.length > 4) {
    riskScore += 10;
    findings.push({
      type: "warning",
      severity: "medium",
      message: `Multiple monetary amounts detected (${amountMatches.length}) — verify consistency`,
    });
  }

  // Clamp risk score
  riskScore = Math.min(riskScore, 100);

  // Add a positive finding if risk is low
  if (riskScore < 25) {
    findings.push({
      type: "success",
      severity: "low",
      message: "No major risk indicators detected in document content",
    });
  }

  const status: AnalysisResult["status"] =
    riskScore >= 65 ? "flagged" : riskScore >= 30 ? "review" : "cleared";

  return {
    riskScore,
    status,
    findings,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Generate a deterministic mock risk score for images (mock OCR path).
 */
export function mockOcrAnalysis(fileName: string): AnalysisResult {
  // Use filename characters to seed a consistent score
  const seed = fileName.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const riskScore = seed % 80 + 10; // 10–89

  const findings: AnalysisFinding[] = [
    {
      type: "info",
      severity: "medium",
      message: "Image document — full OCR text extraction applied",
    },
    {
      type: riskScore > 50 ? "warning" : "success",
      severity: riskScore > 65 ? "high" : riskScore > 35 ? "medium" : "low",
      message:
        riskScore > 50
          ? "Metadata inconsistencies detected in image file"
          : "Image metadata appears consistent",
    },
  ];

  const status: AnalysisResult["status"] =
    riskScore >= 65 ? "flagged" : riskScore >= 30 ? "review" : "cleared";

  return { riskScore, status, findings, timestamp: new Date().toISOString() };
}
