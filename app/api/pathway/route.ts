import { NextRequest, NextResponse } from "next/server";
import { pathwayRegistrationSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = pathwayRegistrationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, organisation, email, pathway, phone, details } = result.data;

    console.log("[WHEAT-NESS API] Stakeholder Pathway Registration:", {
      fullName,
      organisation,
      email,
      pathway,
      phone,
      details,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: `Pathway interest registered successfully for [${pathway.toUpperCase()}].`,
        registrationCode: `WN-PATH-${Math.floor(100000 + Math.random() * 900000)}`,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error registering pathway.",
      },
      { status: 500 }
    );
  }
}
