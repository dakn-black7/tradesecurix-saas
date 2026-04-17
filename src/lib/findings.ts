export type FindingInput =
  | string
  | {
      text?: string;
      message?: string;
      title?: string;
      description?: string;
      recommendation?: string;
      severity?: string;
      type?: string;
    };

export type NormalizedFinding = {
  message: string;
  severity: "low" | "medium" | "high";
  type: "info" | "warning" | "success";
};

export function normalizeFinding(input: FindingInput): NormalizedFinding {
  if (typeof input === "string") {
    return {
      message: input,
      severity: "medium",
      type: "info",
    };
  }

  const { text, message, title, description, recommendation, severity, type } = input;

  const combinedMessage = message || text || `${title || "Finding"}: ${description || "No description"}`;

  const normalizedSeverity: "low" | "medium" | "high" =
    severity === "high" || severity === "High" ? "high" :
    severity === "low" || severity === "Low" ? "low" :
    "medium";

  const normalizedType: "info" | "warning" | "success" =
    type === "warning" || type === "Warning" ? "warning" :
    type === "success" || type === "Success" ? "success" :
    "info";

  return {
    message: combinedMessage,
    severity: normalizedSeverity,
    type: normalizedType,
  };
}

export function normalizeFindings(inputs: FindingInput[]): NormalizedFinding[] {
  return inputs.map(normalizeFinding);
}