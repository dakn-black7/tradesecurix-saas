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

  // This would integrate with a PDF generation library like jsPDF or pdfkit
  // For now, returning a placeholder
  const content = `
    Report: ${data.fileName}
    Risk Score: ${data.riskScore}
    Timestamp: ${data.timestamp}

    Findings:
    ${normalizedFindings.map(f => `- ${f.type.toUpperCase()}: ${f.message} (Severity: ${f.severity})`).join('\n')}
  `;

  return new Blob([content], { type: "application/pdf" });
};

export const generateReport = async (data: ReportData): Promise<Blob> => generateReportPDF(data);

export const formatRiskScore = (score: number): string => {
  if (score < 25) return "Low Risk";
  if (score < 50) return "Medium Risk";
  if (score < 75) return "High Risk";
  return "Critical Risk";
};

export const getRiskColor = (score: number): string => {
  if (score < 25) return "green";
  if (score < 50) return "yellow";
  if (score < 75) return "orange";
  return "red";
};
