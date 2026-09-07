import Reveal from "./Reveal";

const LINES = [
  ["FROM IDEA", "TO IMPACT."],
  ["FROM CODE", "TO CONTENT."],
  ["FROM BRAND", "TO BUSINESS."],
  ["FROM TODAY", "TO WHAT'S NEXT."],
];

export default function Transition() {
  return (
    <section className="bg-paper py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-2">
          {LINES.map(([from, to], i) => (
            <Reveal key={from} delay={i * 80}>
              <p className="display flex flex-wrap items-baseline gap-x-4 text-[clamp(1.75rem,5.5vw,4rem)] leading-tight">
                <span className="text-ink/35">{from}</span>
                <span className="text-orange" aria-hidden>
                  →
                </span>
                <span className="text-ink">{to}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
