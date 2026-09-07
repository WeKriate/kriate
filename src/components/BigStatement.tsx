import Image from "next/image";
import Reveal from "./Reveal";

export default function BigStatement() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32 lg:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]"
      >
        <Image
          src="/kriate-monogram-white.png"
          alt=""
          width={1046}
          height={1110}
          className="w-[380px] max-w-[70%]"
        />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-8">
        <Reveal>
          <p className="display text-orange text-[clamp(2rem,7vw,5rem)]">
            DON&apos;T JUST EXIST.
          </p>
          <p className="display mt-2 text-cream text-[clamp(2.25rem,8vw,6rem)]">
            BE IMPOSSIBLE
            <br />
            TO IGNORE.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-cream/70 sm:text-xl">
            We help ambitious businesses build brands and digital experiences
            that deserve attention.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-cream/50">
            Kriate.org
          </p>
        </Reveal>
      </div>
    </section>
  );
}
