"use client";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { FindingInput, normalizeFindings } from "@/lib/findings";

interface Finding {
  type: "warning" | "info" | "success";
  message: string;
  severity: "high" | "medium" | "low";
}

export default function FindingsPanel({ findings }: { findings: FindingInput[] }) {
  const normalizedFindings = normalizeFindings(findings);
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
      <div className="space-y-4">
        {normalizedFindings.map((finding, index) => {
          const iconColor = {
            high: "text-red-400",
            medium: "text-yellow-400",
            low: "text-green-400",
          };
          const bgColor = {
            high: "bg-red-600/10 border-red-600/30",
            medium: "bg-yellow-600/10 border-yellow-600/30",
            low: "bg-green-600/10 border-green-600/30",
          };

          return (
            <div key={index} className={`border rounded-xl p-4 flex items-start gap-3 ${bgColor[finding.severity]}`}>
              {finding.severity === "high" ? (
                <AlertTriangle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${iconColor[finding.severity]}`} />
              ) : finding.severity === "low" ? (
                <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${iconColor[finding.severity]}`} />
              ) : (
                <Info className={`h-5 w-5 mt-0.5 flex-shrink-0 ${iconColor[finding.severity]}`} />
              )}
              <div>
                <p className="font-medium">{finding.message}</p>
                <p className="text-sm text-zinc-400 mt-1">Severity: {finding.severity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
