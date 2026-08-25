import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

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

    // Process valid submission (e.g. log, store or notify PDU)
    const { fullName, organisation, email, pathway, message } = result.data;

    console.log("[WHEAT-NESS API] Contact Form Submission Received:", {
      fullName,
      organisation,
      email,
      pathway,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your correspondence has been logged with the Programme Delivery Unit. A representative will contact you shortly.",
        referenceId: `WN-CORR-${Math.floor(100000 + Math.random() * 900000)}`,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error processing correspondence.",
      },
      { status: 500 }
    );
  }
}
