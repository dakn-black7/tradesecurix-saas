"use client";
import { ArrowLeft, Download, Share2, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { generateReport } from "@/lib/report";

export default function ReportPage() {
  const params = useParams();
  const reportId = params.id;

  // Mock data - in real app, fetch from API
  const report = {
    id: reportId,
    title: "Trade Document Analysis Report",
    companyName: "ABC International Ltd.",
    date: "April 9, 2026",
    status: "Verified",
    riskScore: 15,
    summary: "Document analysis completed successfully. Low risk detected with minor inconsistencies that do not impact overall validity.",
    companyDetails: {
      name: "ABC International Ltd.",
      registration: "Company No. 12345678",
      address: "123 Business Street, London, UK",
      incorporationDate: "January 15, 2020"
    },
    riskAnalysis: {
      overall: "Low Risk",
      score: 15,
      factors: [
        { category: "Document Authenticity", score: 10, status: "Verified" },
        { category: "Company Verification", score: 20, status: "Low Risk" },
        { category: "Financial Indicators", score: 5, status: "Verified" }
      ]
    },
    findings: [
      {
        type: "Document Analysis",
        severity: "Low",
        title: "Minor formatting inconsistency",
        description: "The document header formatting slightly deviates from standard templates, but does not indicate fraud.",
        recommendation: "No action required"
      },
      {
        type: "Company Verification",
        severity: "Info",
        title: "Company registration confirmed",
        description: "Company registration details match official records.",
        recommendation: "Proceed with confidence"
      }
    ],
    conclusion: "Based on comprehensive analysis, this trade document appears legitimate with low risk of fraud. The minor inconsistencies detected do not impact the document's validity or the company's credibility."
  };

  const handleDownload = () => {
    generateReport({
      fileName: `${report.companyName} Report`,
      riskScore: report.riskScore,
      findings: report.findings,
      timestamp: report.date,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Verified": return "text-green-400 bg-green-600/20";
      case "Low Risk": return "text-yellow-400 bg-yellow-600/20";
      case "High Risk": return "text-red-400 bg-red-600/20";
      default: return "text-gray-400 bg-gray-600/20";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "Low": return <CheckCircle className="h-5 w-5 text-green-400" />;
      case "Medium": return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case "High": return <XCircle className="h-5 w-5 text-red-400" />;
      default: return <Shield className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="p-2 hover:bg-gray-800 rounded-lg transition">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold">{report.title}</h1>
                <p className="text-zinc-400">{report.companyName}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(report.status)}`}>
                {report.status}
              </span>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-lg transition">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Summary */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{report.riskScore}%</div>
              <div className="text-sm text-zinc-400">Risk Score</div>
            </div>
            <div className="flex-1">
              <p className="text-zinc-300">{report.summary}</p>
            </div>
          </div>
          <div className="text-sm text-zinc-400">
            Report generated on {report.date}
          </div>
        </div>

        {/* Company Details */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Company Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-zinc-400">Company Name</label>
              <p className="text-white mt-1">{report.companyDetails.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-zinc-400">Registration Number</label>
              <p className="text-white mt-1">{report.companyDetails.registration}</p>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-zinc-400">Address</label>
              <p className="text-white mt-1">{report.companyDetails.address}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-zinc-400">Incorporation Date</label>
              <p className="text-white mt-1">{report.companyDetails.incorporationDate}</p>
            </div>
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Risk Analysis</h2>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Overall Risk Assessment</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(report.riskAnalysis.overall)}`}>
                {report.riskAnalysis.overall}
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${report.riskScore}%` }}
              ></div>
            </div>
          </div>
          <div className="space-y-4">
            {report.riskAnalysis.factors.map((factor, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
                <span className="font-medium">{factor.category}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-zinc-400">{factor.score}%</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(factor.status)}`}>
                    {factor.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Findings */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Detailed Findings</h2>
          <div className="space-y-6">
            {report.findings.map((finding, index) => (
              <div key={index} className="border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  {getSeverityIcon(finding.severity)}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold">{finding.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        finding.severity === 'Low' ? 'bg-green-600/20 text-green-400' :
                        finding.severity === 'Medium' ? 'bg-yellow-600/20 text-yellow-400' :
                        'bg-red-600/20 text-red-400'
                      }`}>
                        {finding.severity} Risk
                      </span>
                    </div>
                    <p className="text-zinc-300 mb-3">{finding.description}</p>
                    <div className="text-sm">
                      <span className="font-medium text-zinc-400">Recommendation: </span>
                      <span className="text-zinc-300">{finding.recommendation}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Final Conclusion</h2>
          <p className="text-zinc-300 leading-relaxed">{report.conclusion}</p>
        </div>
      </div>
    </div>
  );
}