"use client";
import { CheckCircle2, AlertTriangle, Clock } from "lucide-react";

interface CompanyCardProps {
  result: any;
}

export default function CompanyCard({ result }: CompanyCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-600/10 border-green-600/30 text-green-400";
      case "pending":
        return "bg-yellow-600/10 border-yellow-600/30 text-yellow-400";
      default:
        return "bg-red-600/10 border-red-600/30 text-red-400";
    }
  };

  const statusIcon = {
    verified: <CheckCircle2 className="h-5 w-5" />,
    pending: <Clock className="h-5 w-5" />,
    failed: <AlertTriangle className="h-5 w-5" />,
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">{result.companyName}</h2>
          <p className="text-zinc-400">{result.country}</p>
        </div>
        <div className={`px-4 py-2 rounded-xl border flex items-center gap-2 font-semibold ${getStatusColor(result.verificationStatus)}`}>
          {statusIcon[result.verificationStatus as keyof typeof statusIcon]}
          {result.verificationStatus}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-zinc-400 text-sm mb-2">Verification Status</p>
          <p className="text-xl font-bold capitalize">{result.verificationStatus}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-zinc-400 text-sm mb-2">Risk Level</p>
          <p className={`text-xl font-bold capitalize ${result.riskLevel === "high" ? "text-red-400" : "text-green-400"}`}>
            {result.riskLevel}
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-zinc-400 text-sm mb-2">Registration Found</p>
          <p className="text-xl font-bold">{result.registrationFound ? "Yes" : "No"}</p>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6">
        <p className="text-sm text-zinc-400">
          Last verified: {new Date(result.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
