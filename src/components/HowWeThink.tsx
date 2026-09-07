import Reveal from "./Reveal";

const STEPS = [
  {
    no: "01",
    title: "THINK",
    copy: "Understand the problem before creating the solution.",
  },
  {
    no: "02",
    title: "STRATEGIZE",
    copy: "Find the direction that makes sense for the brand and its audience.",
  },
  {
    no: "03",
    title: "CREATE",
    copy: "Turn the strategy into design, content and technology.",
  },
  {
    no: "04",
    title: "BUILD",
    copy: "Make it real. Make it work. Make it better.",
  },
  {
    no: "05",
    title: "GROW",
    copy: "Launch, learn, improve and keep moving forward.",
  },
];

export default function HowWeThink() {
  return (
    <section
      id="how-we-think"
      className="grid-texture bg-cream py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-grey">
            <span className="text-orange">/</span> How We Think
          </p>
          <h2 className="display max-w-4xl text-ink text-[clamp(2.25rem,6vw,4.5rem)]">
            A CLEAR WAY <span className="text-orange">FORWARD.</span>
          </h2>
        </Reveal>

        <ol className="mt-14 border-t border-ink/15">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 60}>
              <div className="group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-ink/15 py-7 transition-colors hover:bg-paper sm:grid-cols-[120px_1fr_2fr] sm:gap-10 sm:px-2">
                <span className="display text-[clamp(2rem,5vw,3.25rem)] text-ink/15 transition-colors group-hover:text-orange">
                  {step.no}
                </span>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
                  {step.title}
                </h3>
                <p className="col-span-2 text-lg text-grey sm:col-span-1">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
