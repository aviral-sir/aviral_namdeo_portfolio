import nodemailer from "nodemailer";

export const runtime = "nodejs";

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const subject = String(body?.subject || "").trim();
  const message = String(body?.message || "").trim();

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (name.length > 100 || email.length > 254 || subject.length > 200 || message.length > 5000) {
    return Response.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length) {
    console.error("Missing SMTP environment variables:", missing.join(", "));
    return Response.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const port = Number(process.env.SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const cleanSubject = (subject || "New message").replace(/[\r\n]/g, " ");
  const receivedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  try {
    await transporter.sendMail({
      from: `"aviralnamdeo.com Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[aviralnamdeo.com] ${cleanSubject} — from ${name.replace(/[\r\n]/g, " ")}`,
      text: `New message from the aviralnamdeo.com contact form\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "-"}\n\nMessage:\n${message}\n\n---\nReceived on ${receivedAt}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <h2 style="color: #ea580c; margin-bottom: 4px;">New contact form message</h2>
          <p style="margin-top: 0; color: #64748b;">aviralnamdeo.com</p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject || "-")}</p>
          <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 12px; color: #94a3b8;">Received on ${receivedAt}</p>
        </div>`,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}
