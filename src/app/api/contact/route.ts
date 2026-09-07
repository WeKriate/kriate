import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  company_website?: string; // honeypot
};

const RECIPIENT = process.env.CONTACT_TO || "kriateorg@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept honeypot hits so bots think they succeeded.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    console.error(
      "[contact] Missing SMTP_USER / SMTP_PASS environment variables."
    );
    return NextResponse.json(
      { error: "Email is not configured yet. Please email hello@kriate.org." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port: Number(SMTP_PORT) || 465,
    secure: (Number(SMTP_PORT) || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const phone = (data.phone || "").trim();
  const company = (data.company || "").trim();
  const service = (data.service || "").trim();

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Company", company || "—"],
    ["Service", service || "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#111111">
      <div style="background:#111111;padding:24px 28px">
        <span style="color:#f7f3ec;font-size:20px;font-weight:800;letter-spacing:-0.5px">
          KRIATE<span style="color:#f4511e">■</span>
        </span>
        <p style="color:#f4511e;margin:6px 0 0;font-size:12px;letter-spacing:2px;text-transform:uppercase">
          New Project Enquiry
        </p>
      </div>
      <div style="background:#f7f3ec;padding:28px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${rows
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:8px 0;width:120px;color:#6b6863;font-weight:700;text-transform:uppercase;font-size:11px;letter-spacing:1px;vertical-align:top">${k}</td>
              <td style="padding:8px 0;color:#111111">${escapeHtml(v)}</td>
            </tr>`
            )
            .join("")}
        </table>
        <div style="margin-top:20px;padding-top:20px;border-top:1px solid #d8d2c6">
          <p style="color:#6b6863;font-weight:700;text-transform:uppercase;font-size:11px;letter-spacing:1px;margin:0 0 8px">Message</p>
          <p style="color:#111111;line-height:1.6;margin:0;white-space:pre-wrap">${escapeHtml(
            message
          )}</p>
        </div>
      </div>
      <div style="padding:16px 28px;font-size:12px;color:#6b6863">
        Sent from the Kriate.org contact form.
      </div>
    </div>`;

  const text = [
    "New Project Enquiry — Kriate.org",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Kriate Website" <${SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please email hello@kriate.org." },
      { status: 502 }
    );
  }
}
