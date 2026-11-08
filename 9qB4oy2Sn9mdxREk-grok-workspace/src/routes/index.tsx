import { createFileRoute } from "@tanstack/react-router";
import { Activity, Scale, ShieldCheck, MessagesSquare, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { PulseDemo } from "@/components/pulse-demo";

export const Route = createFileRoute("/")({ component: Home });

const NAV = [
  { href: "#about", label: "About" },
  { href: "#method", label: "Method" },
  { href: "#prototype", label: "Prototype" },
  { href: "#ethics", label: "Ethics" },
  { href: "#who", label: "Who we are" },
];

function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight text-teal">
            <span className="grid size-8 place-items-center rounded-lg bg-teal text-sm text-paper">W</span>
            WorkPulse
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#prototype"
            className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-paper hover:bg-teal-deep"
          >
            Open the score
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-copper uppercase">
              Veer Surendra Sai University of Technology · Burla
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl">
              Employee workload, read in plain language.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              WorkPulse is a proposed Python-based early-warning prototype. It organises a few work indicators into a transparent workload-risk score so managers can start a fair conversation — not diagnose health or judge commitment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#prototype" className="rounded-full bg-copper px-5 py-3 text-sm font-semibold text-paper hover:bg-ink">
                Run a fictional case
              </a>
              <a href="#about" className="rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink hover:border-teal">
                Read the brief
              </a>
            </div>
          </div>

          <aside id="who" className="self-start rounded-card border border-line bg-surface p-6 shadow-[0_1px_0_rgba(26,35,50,0.04)]">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">Who we are</p>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-xs font-medium tracking-wide text-muted uppercase">Submitted by</dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-ink">Sai Bighnesh Bahali</dd>
              </div>
              <div className="border-t border-line pt-5">
                <dt className="text-xs font-medium tracking-wide text-muted uppercase">Guided by</dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-ink">Mr. Prasant Barla</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm text-muted">Organisational Behaviour · Term report</p>
          </aside>
        </section>

        <section id="about" className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <SectionLabel>1 · Introduction</SectionLabel>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl font-semibold text-ink">
              Performance is skill, equipment, and the conditions people work in.
            </h2>
            <p className="mt-4 max-w-3xl text-muted">
              When fatigue builds up, concentration, quality and safety become harder to hold. WorkPulse gathers voluntary or manually entered signals — hours, overtime, breaks, a self-reported fatigue rating and task-error count — and explains which of them crossed a documented threshold.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {OBJECTIVES.map((item) => (
                <li key={item} className="rounded-xl border border-line bg-paper px-4 py-4 text-sm leading-relaxed text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="method" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionLabel>3 · Methodology</SectionLabel>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">A rule, then a person.</h2>
          <p className="mt-4 max-w-3xl text-muted">
            Each input is checked against a simple threshold. Weighted points produce a low, moderate or high category. The score is a screening aid, not a medical measurement.
          </p>

          <ol className="mt-8 grid gap-3 sm:grid-cols-5">
            {STEPS.map((step, i) => (
              <li key={step} className="rounded-xl border border-line bg-surface px-3 py-4">
                <span className="font-serif text-2xl font-semibold text-copper">{i + 1}</span>
                <p className="mt-2 text-sm font-medium leading-snug text-ink">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 overflow-x-auto rounded-card border border-line bg-surface">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-paper text-xs tracking-wide text-muted uppercase">
                <tr>
                  <th className="px-4 py-3 font-semibold">Input</th>
                  <th className="px-4 py-3 font-semibold">Illustrative threshold</th>
                  <th className="px-4 py-3 font-semibold">Points</th>
                  <th className="px-4 py-3 font-semibold">System response</th>
                </tr>
              </thead>
              <tbody>
                {SIGNALS.map((row) => (
                  <tr key={row.input} className="border-t border-line">
                    <td className="px-4 py-3 font-medium text-ink">{row.input}</td>
                    <td className="px-4 py-3 text-muted">{row.signal}</td>
                    <td className="px-4 py-3 font-semibold text-teal">{row.points}</td>
                    <td className="px-4 py-3 text-ink">{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {CATEGORIES.map((c) => (
              <article key={c.name} className="rounded-card border border-line bg-surface p-5">
                <p className="text-xs font-semibold tracking-wide text-muted uppercase">{c.range}</p>
                <h3 className="mt-1 font-serif text-2xl font-semibold text-ink">{c.name}</h3>
                <p className="mt-2 text-sm text-muted">{c.meaning}</p>
                <p className="mt-3 text-sm font-medium text-ink">{c.action}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-card bg-teal p-6 text-paper">
              <h3 className="font-serif text-2xl font-semibold">Link with organisational behaviour</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/85">
                The tool sits with job stress, motivation, well-being, communication and managerial decision-making. By prompting a conversation instead of an automatic judgement, it supports a human-relations approach and fairer allocation when workloads differ.
              </p>
            </article>
            <article className="rounded-card border border-copper/40 bg-copper-soft p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">Design principle</p>
              <p className="mt-3 font-serif text-2xl leading-snug font-semibold text-ink">
                Explain every alert in plain language, and leave the final decision to a responsible person.
              </p>
            </article>
          </div>
        </section>

        <section id="prototype" className="border-y border-line bg-paper-deep/50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <SectionLabel>4–5 · Scoring and prototype</SectionLabel>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">Same rules as the report. Live on the page.</h2>
            <p className="mt-4 max-w-3xl text-muted">
              The classroom plan is a small Python command-line program. This page applies those same documented rules so the output — score, reasons, and one practical action — can be inspected without installing anything. Fictional cases check the rules. They do not prove the system detects fatigue or improves productivity.
            </p>
            <div className="mt-8">
              <PulseDemo />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>6 · Expected findings</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink">Proposed outcomes, not measured results.</h2>
              <ul className="mt-6 space-y-4">
                {FINDINGS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-copper" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div id="ethics">
              <SectionLabel>7 · Limits and safeguards</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink">Not a medical tool. Not a ranking tool.</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {SAFEGUARDS.map((item) => (
                  <article key={item.title} className="rounded-xl border border-line bg-surface p-4">
                    <item.icon className="size-5 text-teal" aria-hidden />
                    <h3 className="mt-3 text-sm font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-teal-deep text-paper">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <SectionLabel light>8 · Conclusion</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold">
              Use data to start a supportive conversation, not to label or punish an employee.
            </h2>
            <p className="mt-4 max-w-3xl text-paper/80">
              WorkPulse connects programming with job stress, motivation, well-being, communication and fair workload distribution. Its purpose is not closer surveillance. Any claim that it improves productivity must be tested with consent, safeguards and real-world evaluation.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-serif text-xl font-semibold text-ink">WorkPulse</p>
            <p className="mt-2 text-sm text-muted">Organisational Behaviour · VSSUT, Burla, Odisha</p>
          </div>
          <ol className="space-y-2 text-sm text-muted">
            <li>International Labour Organization (2016). Workplace Stress: A Collective Challenge.</li>
            <li>WHO & ILO (2022). Mental health at work: Policy brief.</li>
            <li>NIOSH (1999). Stress at Work. DHHS (NIOSH) Publication No. 99-101.</li>
            <li>
              Python Software Foundation.{" "}
              <a className="underline decoration-line underline-offset-2 hover:text-ink" href="https://docs.python.org/3/" target="_blank" rel="noreferrer">
                Python 3 Documentation
              </a>
            </li>
          </ol>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-semibold tracking-[0.18em] uppercase ${light ? "text-paper/70" : "text-copper"}`}>
      {children}
    </p>
  );
}

const OBJECTIVES = [
  "Show how basic programming can support an organisational behaviour decision.",
  "Spot possible warning signs from hours, overtime, breaks, self-reported fatigue and task errors.",
  "Produce understandable alerts and practical suggestions for managers.",
  "Encourage well-being, safe practice and fair task allocation.",
  "Protect privacy and trust through consent, transparency and limited data use.",
];

const STEPS = [
  "Enter indicators",
  "Validate inputs",
  "Calculate a rule-based score",
  "Show category and reasons",
  "Supportive manager review",
];

const SIGNALS = [
  { input: "Work duration", signal: "Shift over 9 hours, or overtime on several days", points: "+2", response: "Flag possible excessive workload" },
  { input: "Break duration", signal: "Less than 30 minutes of total breaks", points: "+1", response: "Suggest a suitable rest break" },
  { input: "Fatigue rating", signal: "Voluntary self-rating of 4 or 5 on a 1–5 scale", points: "+3", response: "Recommend a supportive check-in" },
  { input: "Task errors", signal: "More errors than the person’s usual level", points: "+2", response: "Review difficulty, training and workload" },
];

const CATEGORIES = [
  { name: "Low", range: "0–2", meaning: "No major warning from the entered indicators.", action: "Maintain normal check-ins and healthy breaks." },
  { name: "Moderate", range: "3–5", meaning: "One or more indicators need review.", action: "Discuss workload, priorities and recovery time." },
  { name: "High", range: "6–8", meaning: "Several warning signs appear together.", action: "Prompt a supportive review; consider reallocating tasks." },
];

const FINDINGS = [
  "A consistent score may help managers notice combinations of long hours, limited breaks, fatigue reports and rising errors.",
  "Explaining each alert may make workload discussions more objective and less dependent on guesswork.",
  "Reviewing priorities, recovery time or task allocation may help protect well-being and work quality.",
  "An alert cannot prove that fatigue caused an error and must not be treated as evidence of poor performance.",
];

const SAFEGUARDS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Scale, title: "Context first", body: "Inputs can miss job type, individual differences and life outside work." },
  { icon: ShieldCheck, title: "Limited data", body: "Explain what is collected and why. Collect only what is necessary. Restrict access." },
  { icon: Activity, title: "Not predictive AI", body: "This rule model is not validated and must not be presented as a medical tool." },
  { icon: MessagesSquare, title: "Human decision", body: "Do not use the score alone for discipline, ranking, hiring or dismissal." },
];
