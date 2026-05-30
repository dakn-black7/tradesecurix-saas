"use client";
import { CheckCircle2, AlertTriangle, Clock, Shield } from "lucide-react";

interface CompanyCardProps {
  result: {
    companyName: string;
    country: string;
    trustScore: number;
    riskLevel: "low" | "medium" | "high";
    verificationStatus: "verified" | "pending" | "unverified";
    registrationFound: boolean;
    registrationNumber?: string | null;
    timestamp: string;
    disclaimer?: string;
  };
}

export default function CompanyCard({ result }: CompanyCardProps) {
  const statusStyle = {
    verified: "bg-green-600/10 border-green-600/30 text-green-400",
    pending: "bg-yellow-600/10 border-yellow-600/30 text-yellow-400",
    unverified: "bg-red-600/10 border-red-600/30 text-red-400",
  };

  const statusIcon = {
    verified: <CheckCircle2 className="h-5 w-5" />,
    pending: <Clock className="h-5 w-5" />,
    unverified: <AlertTriangle className="h-5 w-5" />,
  };

  const trustColor =
    result.trustScore >= 70
      ? "text-green-400"
      : result.trustScore >= 45
      ? "text-yellow-400"
      : "text-red-400";

  // Trust score gauge width
  const gaugeWidth = `${result.trustScore}%`;
  const gaugeColor =
    result.trustScore >= 70 ? "bg-green-500" : result.trustScore >= 45 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600/10 p-3">
            <Shield className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{result.companyName}</h2>
            <p className="text-zinc-400">{result.country}</p>
          </div>
        </div>
        <div
          className={`px-4 py-2 rounded-xl border flex items-center gap-2 font-semibold capitalize ${
            statusStyle[result.verificationStatus]
          }`}
        >
          {statusIcon[result.verificationStatus]}
          {result.verificationStatus}
        </div>
      </div>

      {/* Trust Score */}
      <div className="bg-gray-800/60 rounded-xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-400 font-medium">Trust Score</p>
          <p className={`text-3xl font-bold ${trustColor}`}>{result.trustScore}<span className="text-base font-normal text-zinc-500">/100</span></p>
        </div>
        <div className="h-2.5 w-full rounded-full bg-gray-700 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${gaugeColor}`}
            style={{ width: gaugeWidth }}
          />
        </div>
        <p className="text-xs text-zinc-500">
          {result.trustScore >= 70
            ? "This company meets standard verification thresholds."
            : result.trustScore >= 45
            ? "Additional due diligence is recommended before engaging."
            : "High risk — proceed with extreme caution and independent verification."}
        </p>
      </div>

      {/* Detail cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-zinc-400 text-xs mb-2 uppercase tracking-wide">Risk Level</p>
          <p
            className={`text-xl font-bold capitalize ${
              result.riskLevel === "high" ? "text-red-400" : result.riskLevel === "medium" ? "text-yellow-400" : "text-green-400"
            }`}
          >
            {result.riskLevel}
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-zinc-400 text-xs mb-2 uppercase tracking-wide">Registration</p>
          <p className="text-xl font-bold text-white">
            {result.registrationFound ? result.registrationNumber || "Found" : "Not provided"}
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-zinc-400 text-xs mb-2 uppercase tracking-wide">Status</p>
          <p className="text-xl font-bold capitalize text-white">{result.verificationStatus}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 pt-4 space-y-2">
        <p className="text-xs text-zinc-500">Verified at: {new Date(result.timestamp).toLocaleString()}</p>
        {result.disclaimer && (
          <p className="text-xs text-amber-600/80 italic">{result.disclaimer}</p>
        )}
      </div>
    </div>
  );
}
