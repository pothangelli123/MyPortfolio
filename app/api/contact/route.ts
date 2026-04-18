import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactFormData } from "@/types";

// Configure your email service here
// For development, you can use Ethereal Email or other services
// For production, use your email provider's credentials

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate form data
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "Please fill in all fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Configure your email service
    // Example using nodemailer with Gmail (requires app password):
    /*
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: data.email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Portfolio Contact: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    */

    // For now, just log the contact form data
    console.log("Contact Form Submission:", data);

    return NextResponse.json(
      {
        message:
          "Your message has been received! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
