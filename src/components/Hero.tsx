import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid-texture relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* soft radial glow behind the visual */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/4 h-[520px] w-[520px] rounded-full bg-orange/15 blur-[120px]"
      />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* Left — editorial headline */}
        <div className="relative z-10">
          <p className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-bold uppercase tracking-[0.12em] text-grey sm:text-xs sm:tracking-[0.25em]">
            <span className="inline-block h-2 w-2 bg-orange" />
            Technology <span className="text-orange">×</span> Marketing{" "}
            <span className="text-orange">×</span> Creativity
          </p>

          <h1 className="display text-ink text-[clamp(3rem,10vw,7.5rem)]">
            WE BUILD
            <br />
            WHAT&apos;S <span className="text-orange">NEXT.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-grey sm:text-xl">
            We turn ideas into digital experiences, brands into identities, and
            businesses into something people remember.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-orange px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-ink"
            >
              Start a Project
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </a>
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 border border-ink/20 px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              Explore Our Work
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </a>
          </div>

          <p className="mt-10 border-l-2 border-orange pl-4 text-base italic text-ink/70">
            Ideas are everywhere. Execution is the difference.
          </p>
        </div>

        {/* Right — conceptual composition */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
