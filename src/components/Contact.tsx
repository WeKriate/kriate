"use client";

import { useState, type FormEvent } from "react";
import { SOCIALS } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const SERVICES = [
  "Technology — Build Digital",
  "Marketing — Grow My Brand",
  "Creativity — Brand & Content",
  "Not sure yet — let's talk",
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — bots fill hidden fields; humans don't.
    if (data.company_website) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="bg-ink py-20 text-cream sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          {/* Left — invitation */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-orange">
              / Final CTA
            </p>
            <h2 className="display text-cream text-[clamp(2.5rem,7vw,5.5rem)]">
              HAVE AN <span className="text-orange">IDEA?</span>
              <br />
              LET&apos;S MAKE
              <br />
              IT REAL.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/70">
              Whether you&apos;re launching something new, rebuilding something
              old, or looking for a better way to grow — let&apos;s create
              what&apos;s next.
            </p>

            <div className="mt-12 space-y-5 text-sm">
              <ContactRow label="Email">
                <a
                  href="mailto:hello@kriate.org"
                  className="text-cream transition-colors hover:text-orange"
                >
                  hello@kriate.org
                </a>
              </ContactRow>
              <ContactRow label="Location">
                <span className="text-cream/80">
                  103, 1st Floor, Roongta Signature, Opposite Shyam Mandir, New
                  Citylight Road, Surat, 395007
                </span>
              </ContactRow>
              <ContactRow label="Social">
                <span className="flex flex-wrap gap-x-4 gap-y-1">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/80 transition-colors hover:text-orange"
                    >
                      {s.label}
                    </a>
                  ))}
                </span>
              </ContactRow>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-cream p-6 text-ink sm:p-10">
            {status === "success" ? (
              <div
                role="status"
                className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center bg-orange text-2xl text-cream">
                  ✓
                </div>
                <h3 className="display text-3xl text-ink">MESSAGE SENT.</h3>
                <p className="mt-3 max-w-sm text-grey">
                  Thanks for reaching out. We&apos;ll get back to you at the
                  email you provided — usually within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-bold uppercase tracking-wider text-orange hover:underline"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <h3 className="display text-2xl text-ink">START A PROJECT</h3>

                {/* Honeypot field (visually hidden, off-screen) */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" required autoComplete="name" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    optional
                  />
                  <Field label="Company" name="company" optional />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="service"
                    className="text-xs font-bold uppercase tracking-wider text-grey"
                  >
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="border border-ink/20 bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-orange"
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-grey"
                  >
                    Tell us about it <span className="text-orange">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Have a project, idea or just a thought? Tell us about it."
                    className="resize-none border border-ink/20 bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-grey/60 focus:border-orange"
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="text-sm font-semibold text-[#c91f2d]">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-1 inline-flex items-center justify-center gap-2 bg-orange px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                  {status !== "submitting" && (
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  )}
                </button>

                <p className="text-xs text-grey">
                  Your details go straight to the Kriate team. We never share
                  them.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-4 border-b border-cream/15 pb-4">
      <span className="w-20 shrink-0 text-xs font-bold uppercase tracking-wider text-cream/50">
        {label}
      </span>
      <span className="text-base">{children}</span>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  optional = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs font-bold uppercase tracking-wider text-grey"
      >
        {label} {required && <span className="text-orange">*</span>}
        {optional && <span className="font-medium normal-case">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="border border-ink/20 bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-orange"
      />
    </div>
  );
}
