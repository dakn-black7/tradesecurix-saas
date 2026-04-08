"use client";
import { useState } from "react";
import { Upload, FileCheck } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import UploadCard from "@/components/UploadCard";
import RiskScoreCard from "@/components/RiskScoreCard";
import FindingsPanel from "@/components/FindingsPanel";

export default function UploadPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleFileUpload = async (file: File) => {
    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Upload failed:", error);
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
          <p className="text-zinc-400 mb-8">Analyze trade documents for fraud detection</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <UploadCard isLoading={isAnalyzing} onFileSelect={handleFileUpload} />
            </div>

            {results && (
              <div className="space-y-6">
                <RiskScoreCard score={results.riskScore} />
                <FindingsPanel findings={results.findings} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
