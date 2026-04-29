import jsPDF from "jspdf";
import { FindingInput, normalizeFindings } from "./findings";

export interface ReportData {
  fileName: string;
  riskScore: number;
  findings: FindingInput[];
  timestamp: string;
}

export interface CompanyVerification {
  companyName: string;
  country: string;
  verificationStatus: "verified" | "pending" | "failed";
  riskLevel: "high" | "low";
  registrationFound: boolean;
  timestamp: string;
}

export const generateReportPDF = async (data: ReportData): Promise<Blob> => {
  const normalizedFindings = normalizeFindings(data.findings);
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 40, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("TradeSecurix", 14, 20);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("CORPORATE AUDIT REPORT", 14, 30);

  // Report metadata
  doc.setTextColor(50, 50, 50);
  doc.setFontSize(10);
  let y = 55;
  doc.setFont("helvetica", "bold");
  doc.text("EXECUTIVE SUMMARY", 14, y);
  y += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(`Document: ${data.fileName}`, 14, y);
  y += 5;
  doc.text(`Analysis Date: ${data.timestamp}`, 14, y);
  y += 5;
  doc.text(`Report Generated: ${new Date().toLocaleString()}`, 14, y);

  // Risk Score Section
  y += 14;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("RISK ASSESSMENT", 14, y);
  y += 7;

  const riskLabel = formatRiskScore(data.riskScore);
  let riskColor: [number, number, number] = [34, 197, 94];
  if (data.riskScore >= 75) riskColor = [239, 68, 68];
  else if (data.riskScore >= 50) riskColor = [249, 115, 22];
  else if (data.riskScore >= 25) riskColor = [234, 179, 8];

  doc.setFillColor(...riskColor);
  doc.roundedRect(14, y, 80, 18, 3, 3, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text(`${data.riskScore}%  ${riskLabel}`, 18, y + 12);

  doc.setTextColor(50, 50, 50);
  y += 26;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(
    `This document has been analyzed for fraud risk indicators. A score of ${data.riskScore}% indicates ${riskLabel.toLowerCase()} conditions.`,
    14,
    y,
    { maxWidth: pageWidth - 28 }
  );

  // Findings Section
  y += 16;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("KEY FINDINGS", 14, y);
  y += 7;

  normalizedFindings.forEach((finding, index) => {
    if (y > 265) {
      doc.addPage();
      y = 20;
    }

    const severityColors: Record<string, [number, number, number]> = {
      high: [239, 68, 68],
      medium: [234, 179, 8],
      low: [34, 197, 94],
    };
    const [r, g, b] = severityColors[finding.severity] ?? [100, 100, 100];
    doc.setFillColor(r, g, b);
    doc.circle(17, y - 1, 2, "F");

    doc.setTextColor(50, 50, 50);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(`${index + 1}. ${finding.message}`, 22, y, { maxWidth: pageWidth - 36 });
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(`Severity: ${finding.severity.toUpperCase()}  |  Type: ${finding.type.toUpperCase()}`, 22, y);
    y += 9;
  });

  // Recommendation Section
  y += 4;
  if (y > 250) { doc.addPage(); y = 20; }
  doc.setTextColor(50, 50, 50);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("RECOMMENDATION", 14, y);
  y += 7;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const recommendation =
    data.riskScore >= 75
      ? "HIGH RISK: This document exhibits multiple fraud indicators. We strongly recommend halting the transaction and conducting a full manual review with legal counsel before proceeding."
      : data.riskScore >= 50
      ? "ELEVATED RISK: This document has notable concerns. Recommend additional verification steps and independent validation before proceeding."
      : data.riskScore >= 25
      ? "MODERATE RISK: Some inconsistencies detected. Recommend standard due diligence procedures before finalizing the transaction."
      : "LOW RISK: Document appears legitimate. Standard verification procedures are sufficient. Continue with normal due diligence protocols.";

  doc.text(recommendation, 14, y, { maxWidth: pageWidth - 28 });

  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(8);
    doc.text(
      `TradeSecurix — Confidential | Page ${i} of ${pageCount}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: "center" }
    );
  }

  return doc.output("blob");
};

export const generateReport = async (data: ReportData): Promise<Blob> => generateReportPDF(data);

export const formatRiskScore = (score: number): string => {
  if (score < 25) return "Low Risk";
  if (score < 50) return "Medium Risk";
  if (score < 75) return "High Risk";
  return "Critical Risk";
};

export const getRiskColor = (score: number): string => {
  if (score < 25) return "bg-emerald-500/10 text-emerald-300";
  if (score < 50) return "bg-amber-500/10 text-amber-300";
  if (score < 75) return "bg-orange-500/10 text-orange-300";
  return "bg-red-500/10 text-red-300";
};
