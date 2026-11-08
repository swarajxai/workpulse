import { useMemo, useState, type ReactNode } from "react";
import { evaluate } from "@/lib/score";

const EXAMPLES = [
  { label: "Steady day", hours: 8, overtimeDays: 0, breakMinutes: 45, fatigue: 2, errorsAboveUsual: false },
  { label: "Long shift", hours: 11, overtimeDays: 1, breakMinutes: 20, fatigue: 3, errorsAboveUsual: false },
  { label: "Stacked signals", hours: 10, overtimeDays: 3, breakMinutes: 15, fatigue: 5, errorsAboveUsual: true },
] as const;

export function PulseDemo() {
  const [hours, setHours] = useState(10);
  const [overtimeDays, setOvertimeDays] = useState(2);
  const [breakMinutes, setBreakMinutes] = useState(20);
  const [fatigue, setFatigue] = useState(4);
  const [errorsAboveUsual, setErrorsAboveUsual] = useState(true);

  const result = useMemo(
    () => evaluate({ hours, overtimeDays, breakMinutes, fatigue, errorsAboveUsual }),
    [hours, overtimeDays, breakMinutes, fatigue, errorsAboveUsual],
  );

  const tone =
    result.category === "Low"
      ? "bg-low-bg text-low"
      : result.category === "Moderate"
        ? "bg-mod-bg text-mod"
        : "bg-high-bg text-high";

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form className="rounded-card border border-line bg-surface p-5 sm:p-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">Classroom prototype</p>
            <h3 className="mt-1 font-serif text-2xl font-semibold text-ink">Try a fictional case</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex.label}
                type="button"
                className="rounded-full border border-line bg-paper px-3 py-2 text-sm font-medium text-ink transition hover:border-teal hover:text-teal"
                onClick={() => {
                  setHours(ex.hours);
                  setOvertimeDays(ex.overtimeDays);
                  setBreakMinutes(ex.breakMinutes);
                  setFatigue(ex.fatigue);
                  setErrorsAboveUsual(ex.errorsAboveUsual);
                }}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Shift length (hours)" hint="Over 9 hours adds 2 points">
            <input
              type="number"
              min={0}
              max={16}
              step={0.5}
              value={hours}
              onChange={(e) => setHours(clamp(Number(e.target.value), 0, 16))}
              className="field"
            />
          </Field>
          <Field label="Overtime days this week" hint="Two or more days adds 2 points">
            <input
              type="number"
              min={0}
              max={7}
              step={1}
              value={overtimeDays}
              onChange={(e) => setOvertimeDays(clamp(Math.round(Number(e.target.value)), 0, 7))}
              className="field"
            />
          </Field>
          <Field label="Total breaks (minutes)" hint="Under 30 minutes adds 1 point">
            <input
              type="number"
              min={0}
              max={180}
              step={5}
              value={breakMinutes}
              onChange={(e) => setBreakMinutes(clamp(Math.round(Number(e.target.value)), 0, 180))}
              className="field"
            />
          </Field>
          <Field label="Fatigue self-rating" hint="4 or 5 adds 3 points">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-pressed={fatigue === n}
                  onClick={() => setFatigue(n)}
                  className={`h-11 min-w-11 flex-1 rounded-lg border text-sm font-semibold transition ${
                    fatigue === n
                      ? "border-teal bg-teal text-paper"
                      : "border-line bg-paper text-ink hover:border-teal"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </Field>
        </div>

        <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-paper px-4 py-3">
          <input
            type="checkbox"
            checked={errorsAboveUsual}
            onChange={(e) => setErrorsAboveUsual(e.target.checked)}
            className="mt-1 size-4 accent-teal"
          />
          <span>
            <span className="block font-medium text-ink">Errors above this person’s usual level</span>
            <span className="block text-sm text-muted">Adds 2 points. The score never proves fatigue caused an error.</span>
          </span>
        </label>
      </form>

      <aside className="flex flex-col rounded-card border border-line bg-teal-deep p-5 text-paper sm:p-6">
        <p className="text-xs font-semibold tracking-[0.16em] text-paper/70 uppercase">Screening result</p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <p className="font-serif text-6xl leading-none font-semibold tabular-nums">{result.score}</p>
          <span className={`rounded-full px-3 py-1 text-sm font-semibold ${tone}`}>{result.category}</span>
        </div>
        <p className="mt-1 text-sm text-paper/70">of 8 illustrative points</p>
        <p className="mt-5 text-lg leading-snug">{result.interpretation}</p>
        <p className="mt-2 text-paper/80">{result.action}</p>

        <div className="mt-6 border-t border-white/15 pt-5">
          <p className="text-xs font-semibold tracking-[0.16em] text-paper/70 uppercase">Why this score</p>
          {result.reasons.length === 0 ? (
            <p className="mt-3 text-sm text-paper/85">No threshold was crossed. Nothing here needs a warning flag.</p>
          ) : (
            <ul className="mt-3 space-y-3">
              {result.reasons.map((r) => (
                <li key={r.label} className="text-sm leading-snug">
                  <span className="font-semibold text-paper">
                    {r.label} <span className="text-copper-soft">+{r.points}</span>
                  </span>
                  <span className="mt-0.5 block text-paper/80">{r.detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="mt-auto pt-6 text-xs leading-relaxed text-paper/60">
          Illustrative design choices, not validated cut-offs. A manager reviews context with the employee before any change to assignments.
        </p>
      </aside>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-ink">{label}</span>
      <span className="mb-2 block text-xs text-muted">{hint}</span>
      {children}
    </label>
  );
}

function clamp(n: number, min: number, max: number) {
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
}
