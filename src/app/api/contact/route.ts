import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Debug: Check if API key is loaded
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not set');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      parentName,
      parentEmail,
      parentPhone,
      studentName,
      studentGrade,
      tutoringSubject,
      additionalInfo,
    } = body;

    // Validate required fields
    if (
      !parentName ||
      !parentEmail ||
      !parentPhone ||
      !studentName ||
      !studentGrade ||
      !tutoringSubject
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to Alan
    const { data, error } = await resend.emails.send({
      from: 'noreply@resend.dev', // Using Resend's default domain for testing
      to: ['alan.smolansky@gmail.com'],
      // to: ['adele@ai-learners.com'], // for testing
      subject: `New Tutoring Inquiry - ${studentName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Tutoring Inquiry
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Parent Information</h3>
            <p><strong>Name:</strong> ${parentName}</p>
            <p><strong>Email:</strong> ${parentEmail}</p>
            <p><strong>Phone:</strong> ${parentPhone}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Student Information</h3>
            <p><strong>Name:</strong> ${studentName}</p>
            <p><strong>Grade Level:</strong> ${studentGrade}</p>
            <p><strong>Subject:</strong> ${tutoringSubject}</p>
          </div>
          
          ${
            additionalInfo
              ? `
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1f2937; margin-top: 0;">Additional Information</h3>
              <p style="white-space: pre-wrap;">${additionalInfo}</p>
            </div>
          `
              : ''
          }
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Next Steps</h3>
            <p>Please respond to ${parentEmail} or call ${parentPhone} within 24 hours to discuss pricing and scheduling.</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This inquiry was submitted from your tutoring website.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
