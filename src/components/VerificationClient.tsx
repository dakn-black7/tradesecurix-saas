"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import CompanyCard from "@/components/CompanyCard";

export default function VerificationClient() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [query, setQuery] = useState({ companyName: "", country: "", registrationNumber: "" });

  const handleVerify = async () => {
    setIsVerifying(true);
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query),
      });
      const data = await response.json();
      setVerificationResult(data);
    } catch (error) {
      console.error("Verification failed:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Verify Company</h1>
          <p className="text-zinc-400 mb-8">Search our global database to verify company details</p>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    value={query.companyName}
                    onChange={(e) => setQuery({ ...query, companyName: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <input
                    type="text"
                    placeholder="e.g. USA, UK, China"
                    value={query.country}
                    onChange={(e) => setQuery({ ...query, country: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Registration #</label>
                  <input
                    type="text"
                    placeholder="Optional"
                    value={query.registrationNumber}
                    onChange={(e) => setQuery({ ...query, registrationNumber: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <button
                onClick={handleVerify}
                disabled={isVerifying || !query.companyName || !query.country}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 transition"
              >
                <Search className="h-5 w-5" />
                {isVerifying ? "Verifying..." : "Verify Company"}
              </button>
            </div>
          </div>

          {verificationResult && <CompanyCard result={verificationResult} />}
        </div>
      </main>
    </div>
  );
}
