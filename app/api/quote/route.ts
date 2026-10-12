import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, businessName, email, phone, message } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || emailUser;

    if (!emailUser || !emailPass) {
      console.error("EMAIL_USER or EMAIL_PASS environment variables are missing.");
      return NextResponse.json(
        { error: "Email service is not configured properly." },
        { status: 500 }
      );
    }

    // Configuração do transporte SMTP do Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Template HTML estilizado para o e-mail recebido
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #33beca; padding: 20px; text-align: center; color: white;">
          <h2 style="margin: 0; font-size: 24px;">New Quote Request</h2>
          <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Florida Medical Facility Cleaning</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff; color: #333333;">
          <p style="font-size: 16px; margin-top: 0;">You received a new quote request from the website:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 35%; color: #555;">Full Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Business Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${businessName || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #33beca; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || "Not provided"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold; margin-bottom: 8px; color: #555;">Message:</p>
            <div style="background-color: #f8fdfe; border-left: 4px solid #33beca; padding: 12px 16px; border-radius: 4px; white-space: pre-wrap; font-size: 15px;">
              ${message || "No message provided."}
            </div>
          </div>
        </div>
        <div style="background-color: #f4f7f9; padding: 15px; text-align: center; font-size: 12px; color: #777;">
          Sent from floridamfc.com quote form.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"FMFC Quote Form" <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `New Quote Request from ${name} - ${businessName || "FMFC"}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending quote email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
