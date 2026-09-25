import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Hello from Anveshan API!",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 },
      );
    }

    await connectDB();

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Message sent successfully! The Anveshan team will get back to you soon.",
        data: {
          id: newContact._id,
        },
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        error:
          error.message || "Failed to send message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
