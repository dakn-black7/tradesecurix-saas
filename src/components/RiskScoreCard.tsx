"use client";
import { Activity } from "lucide-react";

interface RiskScoreCardProps {
  score: number;
}

export default function RiskScoreCard({ score }: RiskScoreCardProps) {
  const getRiskLevel = (score: number) => {
    if (score < 25) return { level: "Low", color: "text-green-400", bgColor: "bg-green-600/10" };
    if (score < 50) return { level: "Medium", color: "text-yellow-400", bgColor: "bg-yellow-600/10" };
    if (score < 75) return { level: "High", color: "text-orange-400", bgColor: "bg-orange-600/10" };
    return { level: "Critical", color: "text-red-400", bgColor: "bg-red-600/10" };
  };

  const riskInfo = getRiskLevel(score);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={`rounded-2xl p-8 border border-gray-800 ${riskInfo.bgColor}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Risk Assessment</h2>
        <Activity className={`h-6 w-6 ${riskInfo.color}`} />
      </div>

      <div className="flex justify-center mb-8">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-gray-700"
            />
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className={riskInfo.color}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold ${riskInfo.color}`}>{score}</span>
            <span className="text-xs text-zinc-400">%</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className={`text-lg font-bold ${riskInfo.color}`}>{riskInfo.level} Risk</p>
        <p className="text-sm text-zinc-400 mt-2">
          {score < 25 && "Document appears legitimate"}
          {score >= 25 && score < 50 && "Some concerns detected"}
          {score >= 50 && score < 75 && "Multiple red flags identified"}
          {score >= 75 && "High probability of fraud"}
        </p>
      </div>
    </div>
  );
}
