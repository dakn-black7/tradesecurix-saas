"use client";
import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import type { FindingInput, FindingSeverity } from '@/lib/findings';
import { normalizeFindings } from '@/lib/findings';

const containerColor: Record<FindingSeverity, string> = {
  high: 'border-red-900/60 bg-red-950/30',
  medium: 'border-blue-900/60 bg-blue-950/20',
  low: 'border-emerald-900/60 bg-emerald-950/20',
};

const iconColor: Record<FindingSeverity, string> = {
  high: 'text-red-400',
  medium: 'text-blue-400',
  low: 'text-emerald-400',
};

export default function FindingsPanel({ findings }: { findings: FindingInput[] }) {
  const normalizedFindings = normalizeFindings(findings);

  return (
    <div className="card p-6">
      <h3 className="mb-4 text-lg font-semibold">Key Findings</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        {normalizedFindings.map((finding, index) => {
          const Icon = finding.severity === 'high' ? AlertTriangle : finding.severity === 'low' ? CheckCircle2 : Info;

          return (
            <li
              key={`${finding.severity}-${index}`}
              className={`flex gap-2 rounded-xl border p-3 ${containerColor[finding.severity]}`}
            >
              <Icon className={`mt-0.5 h-4 w-4 flex-shrink-0 ${iconColor[finding.severity]}`} />
              <p>{finding.message}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
