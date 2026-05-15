export type FindingSeverity = 'high' | 'medium' | 'low';

export type NormalizedFinding = {
  severity: FindingSeverity;
  message: string;
};

export type FindingInput = {
  severity?: unknown;
  message?: unknown;
  text?: unknown;
  title?: unknown;
  description?: unknown;
  recommendation?: unknown;
  type?: unknown;
} | null | undefined;

type SafeFinding = {
  severity?: unknown;
  message?: unknown;
  text?: unknown;
  title?: unknown;
  description?: unknown;
  recommendation?: unknown;
};

const DEFAULT_MESSAGE = 'Potential issue identified during analysis.';

function toSafeString(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim();
}

function normalizeSeverity(value: unknown): FindingSeverity {
  const normalized = typeof value === 'string' ? value.trim().toLowerCase() : '';
  if (normalized === 'high' || normalized === 'medium' || normalized === 'low') {
    return normalized;
  }
  return 'medium';
}

export function normalizeFindings(findings: FindingInput[] | null | undefined): NormalizedFinding[] {
  if (!Array.isArray(findings) || findings.length === 0) {
    return [{ severity: 'medium', message: DEFAULT_MESSAGE }];
  }

  const normalizedFindings = findings.map((entry): NormalizedFinding => {
    const finding = (entry && typeof entry === 'object' ? entry : {}) as SafeFinding;

    const richMessage = [finding.title, finding.description, finding.recommendation]
      .map(toSafeString)
      .filter(Boolean)
      .join(' — ');

    const message = finding.message ?? finding.text ?? (richMessage || DEFAULT_MESSAGE);
    const normalizedMessage = toSafeString(message) || DEFAULT_MESSAGE;

    return {
      severity: normalizeSeverity(finding.severity),
      message: normalizedMessage,
    };
  });

  return normalizedFindings;
}
