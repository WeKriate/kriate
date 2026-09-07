import Logo from "./Logo";
import { SOCIALS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream py-14">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <a
              href="#top"
              aria-label="Kriate — back to top"
              className="inline-flex items-center"
            >
              <Logo className="h-8 w-auto" />
            </a>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-grey">
              Technology <span className="text-orange">×</span> Marketing{" "}
              <span className="text-orange">×</span> Creativity
            </p>
            <p className="mt-2 text-lg font-bold italic text-ink">
              Same Ideas. Bigger Tomorrows.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: "What We Do", href: "#what-we-do" },
                { label: "How We Think", href: "#how-we-think" },
                { label: "Work", href: "#work" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-semibold text-ink/70 transition-colors hover:text-orange"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-wide text-ink/60 transition-colors hover:text-orange"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm text-grey sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kriate. All Rights Reserved.</p>
          <p>
            <a href="mailto:hello@kriate.org" className="hover:text-orange">
              hello@kriate.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
