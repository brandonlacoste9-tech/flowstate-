import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@flowstate-design.co";
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Flowstate Design <onboarding@resend.dev>";

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Project: ${data.projectType}`,
    `Budget: ${data.budget}`,
    `Locale: ${data.locale ?? "n/a"}`,
    "",
    data.message,
  ].join("\n");

  if (!process.env.RESEND_API_KEY) {
    console.info("[contact:dev]", text);
    return NextResponse.json({ ok: true, dev: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const result = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `[Flowstate] ${data.projectType} — ${data.name}`,
    text,
  });

  if (result.error) {
    console.error(result.error);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
