import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "TradeSecurix flagged a fraudulent invoice that would have cost us $180,000. The risk score was 84 — we paused the wire transfer and avoided the loss entirely.",
    name: "David Okonkwo",
    title: "Head of Trade Finance",
    company: "Meridian Capital Group",
    stars: 5,
  },
  {
    quote:
      "We verify 50+ counterparties per month. What used to take our compliance team 3 days now takes 15 minutes. The global registry coverage is exceptional.",
    name: "Sarah-Jane Müller",
    title: "Chief Compliance Officer",
    company: "EuroCargo GmbH",
    stars: 5,
  },
  {
    quote:
      "The audit-ready PDF reports have been a game-changer for our board-level risk reviews. Clean, professional, and defensible to regulators.",
    name: "Priya Nataraj",
    title: "VP Risk Management",
    company: "Pacifica Trade Partners",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300 mb-4">
            Customer Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted by Trade Professionals
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Firms that rely on TradeSecurix to protect every transaction.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-3xl border border-gray-800 bg-gray-900 p-8 flex flex-col gap-6 hover:border-gray-700 transition"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-zinc-300 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-zinc-500">
                  {t.title} · {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
