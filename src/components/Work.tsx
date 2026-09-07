import Reveal from "./Reveal";

const DELIVER = [
  {
    label: "WE BUILD.",
    items: ["Websites", "E-Commerce", "Web Applications", "Digital Products"],
  },
  {
    label: "WE GROW.",
    items: [
      "Social Media",
      "Digital Marketing",
      "Performance Marketing",
      "Brand Strategy",
    ],
  },
  {
    label: "WE CREATE.",
    items: [
      "Brand Identity",
      "Design",
      "Photography",
      "Video",
      "Content",
      "Campaigns",
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-cream py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-grey">
            <span className="text-orange">/</span> What We Deliver
          </p>
          <h2 className="display max-w-4xl text-ink text-[clamp(2.25rem,6vw,4.5rem)]">
            FROM IDEA <span className="text-orange">→</span> TO IMPACT.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {DELIVER.map((group, i) => (
            <Reveal key={group.label} delay={i * 100}>
              <div className="h-full border-t-2 border-ink pt-6">
                <h3 className="text-2xl font-extrabold tracking-tight text-orange">
                  {group.label}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-lg text-ink/80"
                    >
                      <span className="inline-block h-1.5 w-1.5 shrink-0 bg-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-14 text-sm font-semibold uppercase tracking-wider text-grey">
            Selected case studies available on request —{" "}
            <a href="#contact" className="text-orange hover:underline">
              get in touch
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
