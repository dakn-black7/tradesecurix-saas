"use client";
import { LayoutDashboard, FileCheck, Users, TrendingUp } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function DashboardPage() {
  const [recentAnalyses] = useState([
    { id: 1, fileName: "invoice_2024_001.pdf", riskScore: 15, date: "2 hours ago" },
    { id: 2, fileName: "purchase_order.docx", riskScore: 8, date: "1 day ago" },
    { id: 3, fileName: "contract_draft.pdf", riskScore: 42, date: "3 days ago" },
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-400 text-sm font-medium">Documents Analyzed</p>
                  <p className="text-3xl font-bold mt-2">247</p>
                </div>
                <FileCheck className="h-12 w-12 text-blue-600 opacity-20" />
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-400 text-sm font-medium">Fraud Detected</p>
                  <p className="text-3xl font-bold mt-2">12</p>
                </div>
                <TrendingUp className="h-12 w-12 text-red-600 opacity-20" />
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-400 text-sm font-medium">Companies Verified</p>
                  <p className="text-3xl font-bold mt-2">584</p>
                </div>
                <Users className="h-12 w-12 text-green-600 opacity-20" />
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-400 text-sm font-medium">Avg Risk Score</p>
                  <p className="text-3xl font-bold mt-2">18</p>
                </div>
                <LayoutDashboard className="h-12 w-12 text-blue-600 opacity-20" />
              </div>
            </div>
          </div>

          {/* Recent Analyses */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Recent Analyses</h2>
            <div className="space-y-4">
              {recentAnalyses.map((analysis) => (
                <div key={analysis.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
                  <div>
                    <p className="font-medium">{analysis.fileName}</p>
                    <p className="text-zinc-400 text-sm">{analysis.date}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full font-semibold ${
                    analysis.riskScore < 30 ? "bg-green-600/20 text-green-400" : "bg-yellow-600/20 text-yellow-400"
                  }`}>
                    Risk: {analysis.riskScore}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
