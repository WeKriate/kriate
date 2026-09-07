import Reveal from "./Reveal";

const FACETS = ["IDEAS", "STRATEGY", "DESIGN", "TECHNOLOGY"];

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-grey">
            <span className="text-orange">/</span> Who We Are
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-ink text-[clamp(2.5rem,7vw,5.5rem)]">
              WHO
              <br />
              WE <span className="text-orange">ARE.</span>
            </h2>

            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
              {FACETS.map((f, i) => (
                <span key={f} className="text-sm font-bold tracking-wide text-ink/70">
                  {f}
                  {i < FACETS.length - 1 && (
                    <span className="ml-3 text-orange">/</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <p className="text-xl leading-relaxed text-grey sm:text-2xl">
              We are Kriate — a technology, marketing and creative company
              helping businesses build, launch and grow in the digital world.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-grey">
              We bring thinking, creativity and technology together to create
              work that doesn&apos;t just look good — it works.
            </p>
            <p className="mt-10 display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-ink">
              WE DON&apos;T JUST MAKE THINGS.
              <br />
              WE MAKE THINGS <span className="text-orange">MATTER.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
