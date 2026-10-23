"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import UploadCard from "@/components/UploadCard";
import RiskScoreCard from "@/components/RiskScoreCard";
import FindingsPanel from "@/components/FindingsPanel";

type AnalysisResult = { riskScore: number; findings: { type: string; message: string; severity: string }[] };

export default function UploadPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    setIsAnalyzing(true);
    setResults(null);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/analyze", { method: "POST", cache: "no-store", body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Analysis unavailable");
      if (typeof data.riskScore !== "number" || !Array.isArray(data.findings)) throw new Error("Invalid analysis response");
      setResults(data);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to analyze document");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Upload Document</h1>
          <p className="text-zinc-400 mb-8">Document verification is being prepared. No risk score is issued without real analysis.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <UploadCard isLoading={isAnalyzing} onFileSelect={handleFileUpload} />
            {error && <div role="alert" className="rounded-xl border border-amber-600 p-5 text-amber-200">{error}</div>}
            {results && <div className="space-y-6"><RiskScoreCard score={results.riskScore} /><FindingsPanel findings={results.findings} /></div>}
          </div>
        </div>
      </main>
    </div>
  );
}
