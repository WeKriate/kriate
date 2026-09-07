import Reveal from "./Reveal";

const BELIEFS = [
  "Good design should have a purpose.",
  "Technology should solve problems.",
  "Marketing should create connections.",
  "Content should start conversations.",
  "Great ideas should never stay ideas.",
];

export default function WhatWeBelieve() {
  return (
    <section className="bg-cream py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-grey">
              <span className="text-orange">/</span> What We Believe
            </p>
            <h2 className="display text-ink text-[clamp(2.25rem,6vw,4rem)]">
              OUR <span className="text-orange">PRINCIPLES.</span>
            </h2>
          </Reveal>

          <ul className="flex flex-col">
            {BELIEFS.map((belief, i) => (
              <Reveal as="li" key={belief} delay={i * 70}>
                <div className="flex items-baseline gap-5 border-b border-ink/15 py-5">
                  <span className="text-sm font-bold text-orange">
                    0{i + 1}
                  </span>
                  <p className="text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                    {belief}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
