const ITEMS = [
  "WEBSITES",
  "E-COMMERCE",
  "WEB APPLICATIONS",
  "DIGITAL PRODUCTS",
  "SOCIAL MEDIA",
  "DIGITAL MARKETING",
  "PERFORMANCE MARKETING",
  "BRAND STRATEGY",
  "BRAND IDENTITY",
  "DESIGN",
  "PHOTOGRAPHY",
  "VIDEO",
  "CONTENT",
  "CAMPAIGNS",
];

export default function Marquee() {
  // duplicated once so the -50% translate loops seamlessly
  const row = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="Capabilities"
      className="marquee overflow-hidden border-y border-ink/10 bg-orange py-5"
    >
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-6 text-lg font-extrabold uppercase tracking-wide text-cream sm:text-xl"
          >
            {item}
            <span aria-hidden className="text-cream/60">
              ✳
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
