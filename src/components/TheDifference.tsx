import Reveal from "./Reveal";

const WORLDS = [
  { world: "TECHNOLOGY", verb: "Build." },
  { world: "MARKETING", verb: "Connect." },
  { world: "CREATIVITY", verb: "Differentiate." },
];

export default function TheDifference() {
  return (
    <section className="bg-cream py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-grey">
            <span className="text-orange">/</span> The Difference
          </p>
          <h2 className="display mx-auto max-w-4xl text-ink text-[clamp(2.25rem,6vw,4.5rem)]">
            THREE WORLDS.
            <br />
            ONE <span className="text-orange">KRIATE.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-3">
          {WORLDS.map((w, i) => (
            <Reveal key={w.world} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col justify-between bg-paper p-8 transition-colors hover:bg-cream sm:p-10">
                <span className="display text-[clamp(2.5rem,5vw,4rem)] text-ink/10">
                  0{i + 1}
                </span>
                <div className="mt-10">
                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-ink">
                    {w.world}
                  </h3>
                  <p className="mt-1 text-2xl font-bold text-orange">{w.verb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 text-center">
          <p className="display mx-auto max-w-3xl text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight text-ink">
            WHEN THEY COME TOGETHER,
            <br />
            BRANDS <span className="text-orange">GROW.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
