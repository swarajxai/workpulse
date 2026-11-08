import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Activity, i as MessagesSquare, n as ShieldCheck, r as Scale } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-w7OfHsPF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function evaluate(input) {
	const reasons = [];
	if (input.hours > 9 || input.overtimeDays >= 2) {
		const bits = [];
		if (input.hours > 9) bits.push(`shift of ${input.hours} hours`);
		if (input.overtimeDays >= 2) bits.push(`overtime on ${input.overtimeDays} days`);
		reasons.push({
			label: "Work duration",
			points: 2,
			detail: `Flag possible excessive workload — ${bits.join(" and ")}.`
		});
	}
	if (input.breakMinutes < 30) reasons.push({
		label: "Break duration",
		points: 1,
		detail: `Only ${input.breakMinutes} minutes of total breaks. Suggest a suitable rest break.`
	});
	if (input.fatigue >= 4) reasons.push({
		label: "Fatigue rating",
		points: 3,
		detail: `Voluntary self-rating of ${input.fatigue} on a 1–5 scale. Recommend a supportive check-in.`
	});
	if (input.errorsAboveUsual) reasons.push({
		label: "Task errors",
		points: 2,
		detail: "More errors than this person’s usual level. Review task difficulty, training and workload."
	});
	const score = reasons.reduce((sum, r) => sum + r.points, 0);
	if (score <= 2) return {
		score,
		category: "Low",
		interpretation: "No major warning from the entered indicators.",
		action: "Maintain normal check-ins and healthy breaks.",
		reasons
	};
	if (score <= 5) return {
		score,
		category: "Moderate",
		interpretation: "One or more indicators need review.",
		action: "Discuss workload, priorities and recovery time.",
		reasons
	};
	return {
		score,
		category: "High",
		interpretation: "Several warning signs appear together.",
		action: "Prompt a supportive review and consider reallocating tasks.",
		reasons
	};
}
var EXAMPLES = [
	{
		label: "Steady day",
		hours: 8,
		overtimeDays: 0,
		breakMinutes: 45,
		fatigue: 2,
		errorsAboveUsual: false
	},
	{
		label: "Long shift",
		hours: 11,
		overtimeDays: 1,
		breakMinutes: 20,
		fatigue: 3,
		errorsAboveUsual: false
	},
	{
		label: "Stacked signals",
		hours: 10,
		overtimeDays: 3,
		breakMinutes: 15,
		fatigue: 5,
		errorsAboveUsual: true
	}
];
function PulseDemo() {
	const [hours, setHours] = (0, import_react.useState)(10);
	const [overtimeDays, setOvertimeDays] = (0, import_react.useState)(2);
	const [breakMinutes, setBreakMinutes] = (0, import_react.useState)(20);
	const [fatigue, setFatigue] = (0, import_react.useState)(4);
	const [errorsAboveUsual, setErrorsAboveUsual] = (0, import_react.useState)(true);
	const result = (0, import_react.useMemo)(() => evaluate({
		hours,
		overtimeDays,
		breakMinutes,
		fatigue,
		errorsAboveUsual
	}), [
		hours,
		overtimeDays,
		breakMinutes,
		fatigue,
		errorsAboveUsual
	]);
	const tone = result.category === "Low" ? "bg-low-bg text-low" : result.category === "Moderate" ? "bg-mod-bg text-mod" : "bg-high-bg text-high";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "rounded-card border border-line bg-surface p-5 sm:p-6",
			onSubmit: (e) => e.preventDefault(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.16em] text-teal uppercase",
						children: "Classroom prototype"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-serif text-2xl font-semibold text-ink",
						children: "Try a fictional case"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: EXAMPLES.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-full border border-line bg-paper px-3 py-2 text-sm font-medium text-ink transition hover:border-teal hover:text-teal",
							onClick: () => {
								setHours(ex.hours);
								setOvertimeDays(ex.overtimeDays);
								setBreakMinutes(ex.breakMinutes);
								setFatigue(ex.fatigue);
								setErrorsAboveUsual(ex.errorsAboveUsual);
							},
							children: ex.label
						}, ex.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Shift length (hours)",
							hint: "Over 9 hours adds 2 points",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: 0,
								max: 16,
								step: .5,
								value: hours,
								onChange: (e) => setHours(clamp(Number(e.target.value), 0, 16)),
								className: "field"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Overtime days this week",
							hint: "Two or more days adds 2 points",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: 0,
								max: 7,
								step: 1,
								value: overtimeDays,
								onChange: (e) => setOvertimeDays(clamp(Math.round(Number(e.target.value)), 0, 7)),
								className: "field"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Total breaks (minutes)",
							hint: "Under 30 minutes adds 1 point",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: 0,
								max: 180,
								step: 5,
								value: breakMinutes,
								onChange: (e) => setBreakMinutes(clamp(Math.round(Number(e.target.value)), 0, 180)),
								className: "field"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Fatigue self-rating",
							hint: "4 or 5 adds 3 points",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: [
									1,
									2,
									3,
									4,
									5
								].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": fatigue === n,
									onClick: () => setFatigue(n),
									className: `h-11 min-w-11 flex-1 rounded-lg border text-sm font-semibold transition ${fatigue === n ? "border-teal bg-teal text-paper" : "border-line bg-paper text-ink hover:border-teal"}`,
									children: n
								}, n))
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-paper px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: errorsAboveUsual,
						onChange: (e) => setErrorsAboveUsual(e.target.checked),
						className: "mt-1 size-4 accent-teal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-ink",
						children: "Errors above this person’s usual level"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-muted",
						children: "Adds 2 points. The score never proves fatigue caused an error."
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "flex flex-col rounded-card border border-line bg-teal-deep p-5 text-paper sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.16em] text-paper/70 uppercase",
					children: "Screening result"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-6xl leading-none font-semibold tabular-nums",
						children: result.score
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full px-3 py-1 text-sm font-semibold ${tone}`,
						children: result.category
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-paper/70",
					children: "of 8 illustrative points"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-snug",
					children: result.interpretation
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-paper/80",
					children: result.action
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 border-t border-white/15 pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.16em] text-paper/70 uppercase",
						children: "Why this score"
					}), result.reasons.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-paper/85",
						children: "No threshold was crossed. Nothing here needs a warning flag."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-3",
						children: result.reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-sm leading-snug",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-paper",
								children: [
									r.label,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-copper-soft",
										children: ["+", r.points]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-paper/80",
								children: r.detail
							})]
						}, r.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-auto pt-6 text-xs leading-relaxed text-paper/60",
					children: "Illustrative design choices, not validated cut-offs. A manager reviews context with the employee before any change to assignments."
				})
			]
		})]
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-semibold text-ink",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-2 block text-xs text-muted",
				children: hint
			}),
			children
		]
	});
}
function clamp(n, min, max) {
	if (Number.isNaN(n)) return min;
	return Math.min(max, Math.max(min, n));
}
var NAV = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#method",
		label: "Method"
	},
	{
		href: "#prototype",
		label: "Prototype"
	},
	{
		href: "#ethics",
		label: "Ethics"
	},
	{
		href: "#who",
		label: "Who we are"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2 font-serif text-lg font-semibold tracking-tight text-teal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 place-items-center rounded-lg bg-teal text-sm text-paper",
								children: "W"
							}), "WorkPulse"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-6 text-sm font-medium text-muted md:flex",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "hover:text-ink",
								children: item.label
							}, item.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#prototype",
							className: "rounded-full bg-teal px-4 py-2 text-sm font-semibold text-paper hover:bg-teal-deep",
							children: "Open the score"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-[0.18em] text-copper uppercase",
								children: "Veer Surendra Sai University of Technology · Burla"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 max-w-xl font-serif text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl",
								children: "Employee workload, read in plain language."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-lg text-muted",
								children: "WorkPulse is a proposed Python-based early-warning prototype. It organises a few work indicators into a transparent workload-risk score so managers can start a fair conversation — not diagnose health or judge commitment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#prototype",
									className: "rounded-full bg-copper px-5 py-3 text-sm font-semibold text-paper hover:bg-ink",
									children: "Run a fictional case"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#about",
									className: "rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink hover:border-teal",
									children: "Read the brief"
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							id: "who",
							className: "self-start rounded-card border border-line bg-surface p-6 shadow-[0_1px_0_rgba(26,35,50,0.04)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-[0.18em] text-teal uppercase",
									children: "Who we are"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-5 space-y-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs font-medium tracking-wide text-muted uppercase",
										children: "Submitted by"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-serif text-2xl font-semibold text-ink",
										children: "Sai Bighnesh Bahali"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-line pt-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-xs font-medium tracking-wide text-muted uppercase",
											children: "Guided by"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 font-serif text-2xl font-semibold text-ink",
											children: "Mr. Prasant Barla"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm text-muted",
									children: "Organisational Behaviour · Term report"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "about",
						className: "border-y border-line bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "1 · Introduction" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 max-w-2xl font-serif text-4xl font-semibold text-ink",
									children: "Performance is skill, equipment, and the conditions people work in."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-3xl text-muted",
									children: "When fatigue builds up, concentration, quality and safety become harder to hold. WorkPulse gathers voluntary or manually entered signals — hours, overtime, breaks, a self-reported fatigue rating and task-error count — and explains which of them crossed a documented threshold."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-10 grid gap-4 sm:grid-cols-2",
									children: OBJECTIVES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-xl border border-line bg-paper px-4 py-4 text-sm leading-relaxed text-ink",
										children: item
									}, item))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "method",
						className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "3 · Methodology" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-4xl font-semibold text-ink",
								children: "A rule, then a person."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-3xl text-muted",
								children: "Each input is checked against a simple threshold. Weighted points produce a low, moderate or high category. The score is a screening aid, not a medical measurement."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 grid gap-3 sm:grid-cols-5",
								children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-xl border border-line bg-surface px-3 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-2xl font-semibold text-copper",
										children: i + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm font-medium leading-snug text-ink",
										children: step
									})]
								}, step))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 overflow-x-auto rounded-card border border-line bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[640px] text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-paper text-xs tracking-wide text-muted uppercase",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 font-semibold",
												children: "Input"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 font-semibold",
												children: "Illustrative threshold"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 font-semibold",
												children: "Points"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 font-semibold",
												children: "System response"
											})
										] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: SIGNALS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-line",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 font-medium text-ink",
												children: row.input
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 text-muted",
												children: row.signal
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 font-semibold text-teal",
												children: row.points
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 text-ink",
												children: row.response
											})
										]
									}, row.input)) })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 md:grid-cols-3",
								children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card border border-line bg-surface p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold tracking-wide text-muted uppercase",
											children: c.range
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-serif text-2xl font-semibold text-ink",
											children: c.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted",
											children: c.meaning
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm font-medium text-ink",
											children: c.action
										})
									]
								}, c.name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-4 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card bg-teal p-6 text-paper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl font-semibold",
										children: "Link with organisational behaviour"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-paper/85",
										children: "The tool sits with job stress, motivation, well-being, communication and managerial decision-making. By prompting a conversation instead of an automatic judgement, it supports a human-relations approach and fairer allocation when workloads differ."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card border border-copper/40 bg-copper-soft p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold tracking-[0.16em] text-copper uppercase",
										children: "Design principle"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-serif text-2xl leading-snug font-semibold text-ink",
										children: "Explain every alert in plain language, and leave the final decision to a responsible person."
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "prototype",
						className: "border-y border-line bg-paper-deep/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "4–5 · Scoring and prototype" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-serif text-4xl font-semibold text-ink",
									children: "Same rules as the report. Live on the page."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-3xl text-muted",
									children: "The classroom plan is a small Python command-line program. This page applies those same documented rules so the output — score, reasons, and one practical action — can be inspected without installing anything. Fictional cases check the rules. They do not prove the system detects fatigue or improves productivity."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulseDemo, {})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "6 · Expected findings" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-serif text-3xl font-semibold text-ink",
									children: "Proposed outcomes, not measured results."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-4",
									children: FINDINGS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm leading-relaxed text-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 size-1.5 shrink-0 rounded-full bg-copper" }), item]
									}, item))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "ethics",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "7 · Limits and safeguards" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 font-serif text-3xl font-semibold text-ink",
										children: "Not a medical tool. Not a ranking tool."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 grid gap-3 sm:grid-cols-2",
										children: SAFEGUARDS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "rounded-xl border border-line bg-surface p-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
													className: "size-5 text-teal",
													"aria-hidden": true
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-3 text-sm font-semibold text-ink",
													children: item.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-muted",
													children: item.body
												})
											]
										}, item.title))
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-teal-deep text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
									light: true,
									children: "8 · Conclusion"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 max-w-3xl font-serif text-4xl font-semibold",
									children: "Use data to start a supportive conversation, not to label or punish an employee."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-3xl text-paper/80",
									children: "WorkPulse connects programming with job stress, motivation, well-being, communication and fair workload distribution. Its purpose is not closer surveillance. Any claim that it improves productivity must be tested with consent, safeguards and real-world evaluation."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1.4fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl font-semibold text-ink",
						children: "WorkPulse"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Organisational Behaviour · VSSUT, Burla, Odisha"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "space-y-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "International Labour Organization (2016). Workplace Stress: A Collective Challenge." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "WHO & ILO (2022). Mental health at work: Policy brief." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "NIOSH (1999). Stress at Work. DHHS (NIOSH) Publication No. 99-101." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Python Software Foundation.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "underline decoration-line underline-offset-2 hover:text-ink",
									href: "https://docs.python.org/3/",
									target: "_blank",
									rel: "noreferrer",
									children: "Python 3 Documentation"
								})
							] })
						]
					})]
				})
			})
		]
	});
}
function SectionLabel({ children, light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `text-xs font-semibold tracking-[0.18em] uppercase ${light ? "text-paper/70" : "text-copper"}`,
		children
	});
}
var OBJECTIVES = [
	"Show how basic programming can support an organisational behaviour decision.",
	"Spot possible warning signs from hours, overtime, breaks, self-reported fatigue and task errors.",
	"Produce understandable alerts and practical suggestions for managers.",
	"Encourage well-being, safe practice and fair task allocation.",
	"Protect privacy and trust through consent, transparency and limited data use."
];
var STEPS = [
	"Enter indicators",
	"Validate inputs",
	"Calculate a rule-based score",
	"Show category and reasons",
	"Supportive manager review"
];
var SIGNALS = [
	{
		input: "Work duration",
		signal: "Shift over 9 hours, or overtime on several days",
		points: "+2",
		response: "Flag possible excessive workload"
	},
	{
		input: "Break duration",
		signal: "Less than 30 minutes of total breaks",
		points: "+1",
		response: "Suggest a suitable rest break"
	},
	{
		input: "Fatigue rating",
		signal: "Voluntary self-rating of 4 or 5 on a 1–5 scale",
		points: "+3",
		response: "Recommend a supportive check-in"
	},
	{
		input: "Task errors",
		signal: "More errors than the person’s usual level",
		points: "+2",
		response: "Review difficulty, training and workload"
	}
];
var CATEGORIES = [
	{
		name: "Low",
		range: "0–2",
		meaning: "No major warning from the entered indicators.",
		action: "Maintain normal check-ins and healthy breaks."
	},
	{
		name: "Moderate",
		range: "3–5",
		meaning: "One or more indicators need review.",
		action: "Discuss workload, priorities and recovery time."
	},
	{
		name: "High",
		range: "6–8",
		meaning: "Several warning signs appear together.",
		action: "Prompt a supportive review; consider reallocating tasks."
	}
];
var FINDINGS = [
	"A consistent score may help managers notice combinations of long hours, limited breaks, fatigue reports and rising errors.",
	"Explaining each alert may make workload discussions more objective and less dependent on guesswork.",
	"Reviewing priorities, recovery time or task allocation may help protect well-being and work quality.",
	"An alert cannot prove that fatigue caused an error and must not be treated as evidence of poor performance."
];
var SAFEGUARDS = [
	{
		icon: Scale,
		title: "Context first",
		body: "Inputs can miss job type, individual differences and life outside work."
	},
	{
		icon: ShieldCheck,
		title: "Limited data",
		body: "Explain what is collected and why. Collect only what is necessary. Restrict access."
	},
	{
		icon: Activity,
		title: "Not predictive AI",
		body: "This rule model is not validated and must not be presented as a medical tool."
	},
	{
		icon: MessagesSquare,
		title: "Human decision",
		body: "Do not use the score alone for discipline, ranking, hiring or dismissal."
	}
];
//#endregion
export { Home as component };
