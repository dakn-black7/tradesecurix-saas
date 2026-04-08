export interface ReportData {
  fileName: string;
  riskScore: number;
  findings: {
    type: "warning" | "info" | "success";
    message: string;
    severity: "high" | "medium" | "low";
  }[];
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
  // This would integrate with a PDF generation library like jsPDF or pdfkit
  // For now, returning a placeholder
  return new Blob(["PDF Report"], { type: "application/pdf" });
};

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
