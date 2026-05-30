"use client";

import { useState } from "react";
import { Upload, FileCheck, AlertCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import UploadCard from "@/components/UploadCard";
import RiskScoreCard from "@/components/RiskScoreCard";
import FindingsPanel from "@/components/FindingsPanel";

export default function UploadPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    setIsAnalyzing(true);
    setError(null);
    setResults(null);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        cache: "no-store",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error ?? "Analysis failed. Please try again.");
      } else {
        setResults(data);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Upload className="h-7 w-7 text-blue-500" />
            <h1 className="text-4xl font-bold">Upload Document</h1>
          </div>
          <p className="text-zinc-400 mb-8">Analyze trade documents for fraud risk indicators</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <UploadCard isLoading={isAnalyzing} onFileSelect={handleFileUpload} />
              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-red-600/30 bg-red-600/10 p-4 text-sm text-red-300">
                  <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {results && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 rounded-full bg-green-600/10 px-4 py-2 text-sm font-semibold text-green-300 w-fit">
                  <FileCheck className="h-4 w-4" />
                  {results.documentType} — {results.analysisMethod === "mock-ocr" ? "Mock OCR" : "Text Extraction"}
                </div>
                <RiskScoreCard score={results.riskScore} />
                <FindingsPanel findings={results.findings} />
                {results.disclaimer && (
                  <div className="rounded-xl border border-amber-600/20 bg-amber-600/10 p-4 text-xs text-amber-400 italic">
                    ⚠ {results.disclaimer}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
