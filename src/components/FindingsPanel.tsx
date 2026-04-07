import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';

type Finding = string | { text: string; severity?: 'high' | 'medium' | 'low' };

export default function FindingsPanel({ findings }: { findings: Finding[] }) {
  return (
    <div className="card p-6">
      <h3 className="mb-4 text-lg font-semibold">Key Findings</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        {findings.map((finding, index) => {
          const item = typeof finding === 'string' ? { text: finding, severity: 'medium' as const } : finding;
          const icon =
            item.severity === 'high' ? (
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
            ) : item.severity === 'low' ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
            ) : (
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
            );

          return (
            <li key={index} className="flex gap-2 rounded-xl border border-gray-800 bg-gray-950/60 p-3">
              {icon}
              <p>{item.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
