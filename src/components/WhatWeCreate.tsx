import Reveal from "./Reveal";

const SERVICES = [
  {
    no: "01",
    title: "TECHNOLOGY",
    tagline: "Build Digital.",
    copy: "From websites to custom digital experiences, we build technology around the way your business works.",
    capabilities: [
      "Web Development",
      "E-Commerce",
      "Web Applications",
      "UI/UX",
      "Custom Solutions",
      "Business Automation",
    ],
    cta: "Build With Us",
  },
  {
    no: "02",
    title: "MARKETING",
    tagline: "Make People Notice.",
    copy: "Attention is valuable. We help brands earn it, keep it and turn it into growth.",
    capabilities: [
      "Social Media Management",
      "Digital Marketing",
      "Performance Marketing",
      "Content Strategy",
      "Campaigns",
      "Brand Strategy",
    ],
    cta: "Grow With Us",
  },
  {
    no: "03",
    title: "CREATIVITY",
    tagline: "Make Ideas Visible.",
    copy: "We create identities, campaigns and content that give brands something worth remembering.",
    capabilities: [
      "Brand Identity",
      "Graphic Design",
      "Creative Campaigns",
      "Photography",
      "Video Production",
      "Reels & Content",
    ],
    cta: "Create With Us",
  },
];

export default function WhatWeCreate() {
  return (
    <section id="what-we-do" className="bg-ink py-20 text-cream sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-orange">
            / What We Create
          </p>
          <h2 className="display text-cream text-[clamp(2.25rem,6vw,4.5rem)]">
            THREE THINGS.
            <br />
            DONE <span className="text-orange">RIGHT.</span>
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col divide-y divide-cream/15 border-y border-cream/15">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={i * 80}>
              <article className="group grid grid-cols-1 gap-6 py-10 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-12">
                <div className="flex items-baseline gap-4">
                  <span className="display text-[clamp(2rem,5vw,3.5rem)] text-cream/25 transition-colors group-hover:text-orange">
                    {s.no}
                  </span>
                </div>

                <div className="max-w-2xl">
                  <h3 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-none tracking-tight">
                    {s.title}{" "}
                    <span className="text-orange">— {s.tagline}</span>
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-cream/70">
                    {s.copy}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.capabilities.map((c) => (
                      <li
                        key={c}
                        className="border border-cream/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream/80"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:text-orange"
                >
                  {s.cta}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
