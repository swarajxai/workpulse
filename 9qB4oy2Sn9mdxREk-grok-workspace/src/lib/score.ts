export type PulseInput = {
  hours: number;
  overtimeDays: number;
  breakMinutes: number;
  fatigue: number;
  errorsAboveUsual: boolean;
};

export type Reason = { label: string; points: number; detail: string };

export type Category = "Low" | "Moderate" | "High";

export type PulseResult = {
  score: number;
  category: Category;
  interpretation: string;
  action: string;
  reasons: Reason[];
};

export function evaluate(input: PulseInput): PulseResult {
  const reasons: Reason[] = [];

  if (input.hours > 9 || input.overtimeDays >= 2) {
    const bits: string[] = [];
    if (input.hours > 9) bits.push(`shift of ${input.hours} hours`);
    if (input.overtimeDays >= 2) bits.push(`overtime on ${input.overtimeDays} days`);
    reasons.push({
      label: "Work duration",
      points: 2,
      detail: `Flag possible excessive workload — ${bits.join(" and ")}.`,
    });
  }

  if (input.breakMinutes < 30) {
    reasons.push({
      label: "Break duration",
      points: 1,
      detail: `Only ${input.breakMinutes} minutes of total breaks. Suggest a suitable rest break.`,
    });
  }

  if (input.fatigue >= 4) {
    reasons.push({
      label: "Fatigue rating",
      points: 3,
      detail: `Voluntary self-rating of ${input.fatigue} on a 1–5 scale. Recommend a supportive check-in.`,
    });
  }

  if (input.errorsAboveUsual) {
    reasons.push({
      label: "Task errors",
      points: 2,
      detail: "More errors than this person’s usual level. Review task difficulty, training and workload.",
    });
  }

  const score = reasons.reduce((sum, r) => sum + r.points, 0);

  if (score <= 2) {
    return {
      score,
      category: "Low",
      interpretation: "No major warning from the entered indicators.",
      action: "Maintain normal check-ins and healthy breaks.",
      reasons,
    };
  }
  if (score <= 5) {
    return {
      score,
      category: "Moderate",
      interpretation: "One or more indicators need review.",
      action: "Discuss workload, priorities and recovery time.",
      reasons,
    };
  }
  return {
    score,
    category: "High",
    interpretation: "Several warning signs appear together.",
    action: "Prompt a supportive review and consider reallocating tasks.",
    reasons,
  };
}
