import type { NextApiRequest, NextApiResponse } from "next";

const RESEND_KEY = process.env.RESEND_API_KEY as string | undefined;
const BRAND_LEADS_TO = process.env.BRAND_LEADS_TO as string | undefined;

async function sendEmail(subject: string, html: string) {
  if (!RESEND_KEY || !BRAND_LEADS_TO) return false;
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Style2Me <noreply@style2me.com>",
      to: [BRAND_LEADS_TO],
      subject,
      html,
    }),
  });
  return resp.ok;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const { brandName, website, email, contactName, feedUrl, message } = req.body || {};

    if (!brandName || !email) {
      return res.status(400).json({ error: "brandName and email are required" });
    }

    const subject = `New Brand Inquiry — ${brandName}`;
    const html = `
      <h2>New Brand Inquiry</h2>
      <p><b>Brand:</b> ${brandName}</p>
      <p><b>Contact:</b> ${contactName || "-"}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Website:</b> ${website || "-"}</p>
      <p><b>Feed URL:</b> ${feedUrl || "-"}</p>
      <p><b>Message:</b><br/>${(message || "-").replace(/\n/g, "<br/>")}</p>
    `;

    const emailed = await sendEmail(subject, html);
    return res.status(200).json({ ok: true, emailed });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
