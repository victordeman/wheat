import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

/**
 * POST /api/contact
 * Handles official stakeholder correspondence submissions for Project WHEAT-NESS.
 * Validates payload via Zod contactFormSchema.
 * Integrates optional email dispatch via Resend API when RESEND_API_KEY and CONTACT_TO_EMAIL exist.
 * Defaults to persist-safe server log if no email provider is configured.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, organisation, email, pathway, message } = result.data;
    const referenceId = `WN-CORR-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toISOString();

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "info@projectwheatness.gov.ng";

    let emailSent = false;

    // Optional email dispatch via Resend REST API if configured
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Project WHEAT-NESS <no-reply@projectwheatness.gov.ng>",
            to: [recipientEmail],
            subject: `[${referenceId}] New Correspondence: ${pathway.toUpperCase()} - ${fullName}`,
            html: `
              <h2>Project WHEAT-NESS Official Stakeholder Correspondence</h2>
              <p><strong>Reference ID:</strong> ${referenceId}</p>
              <p><strong>Timestamp:</strong> ${timestamp}</p>
              <hr />
              <p><strong>Full Name:</strong> ${fullName}</p>
              <p><strong>Organisation:</strong> ${organisation}</p>
              <p><strong>Email Address:</strong> ${email}</p>
              <p><strong>Selected Pathway:</strong> ${pathway}</p>
              <p><strong>Message:</strong></p>
              <blockquote style="background: #f4f4f4; padding: 12px; border-left: 4px solid #134E3A;">
                ${message}
              </blockquote>
            `,
          }),
        });

        if (resendRes.ok) {
          emailSent = true;
        } else {
          console.warn("[WHEAT-NESS API] Resend email dispatch failed with status:", resendRes.status);
        }
      } catch (err) {
        console.error("[WHEAT-NESS API] Error dispatching email via Resend:", err);
      }
    }

    /*
     * PERSIST-SAFE SERVER LOG:
     * When RESEND_API_KEY is omitted, correspondence details are safely logged below.
     * Production deployments can hook this into database persistence (e.g. Supabase, PostgreSQL, Prisma).
     */
    console.log("[WHEAT-NESS CORRESPONDENCE LOGGED]", {
      referenceId,
      fullName,
      organisation,
      email,
      pathway,
      message,
      emailSent,
      timestamp,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your correspondence has been logged with the Programme Delivery Unit. A representative will contact you shortly.",
        referenceId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[WHEAT-NESS API] Contact handler error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error processing correspondence.",
      },
      { status: 500 }
    );
  }
}
