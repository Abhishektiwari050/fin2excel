import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, location, service, message } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // 1. Save Lead to Supabase
    const { error: supabaseError } = await supabase
      .from('leads')
      .insert([
        { 
          full_name: name, 
          email: email, 
          residence: location, 
          service: service, 
          message: message,
          created_at: new Date().toISOString()
        }
      ]);

    if (supabaseError) {
      console.error('Supabase Error:', supabaseError);
      // We continue even if Supabase fails so the user gets the email
    }

    // 2. Send Email via Resend
    const { data, error: resendError } = await resend.emails.send({
      from: 'Fin2Excel Concierge <onboarding@resend.dev>', // Update this when you have a verified domain
      to: process.env.RECIPIENT_EMAIL || 'info@fin2excel.com',
      subject: `New Private Inquiry from ${name} - ${service}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="border-bottom: 2px solid #000; padding-bottom: 10px; text-transform: uppercase;">New Private Concierge Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Primary Residence:</strong> ${location || 'Not provided'}</p>
          <p><strong>Desired Service:</strong> ${service || 'Not provided'}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin-top: 0;">Inquiry Details:</h3>
            <p>${message || 'No additional details provided.'}</p>
          </div>
          <p style="font-size: 10px; color: #999; margin-top: 30px; border-top: 1px solid #eee; pt-10px;">
            Lead automatically synchronized to Supabase Dashboard.
          </p>
        </div>
      `,
      replyTo: email,
    });

    if (resendError) {
      console.error('❌ Resend Error:', resendError);
      // Detailed error for the user to see in logs
      if (resendError.name === 'validation_error') {
        console.warn('💡 Tip: If you are in Resend Sandbox mode, you can ONLY send emails to the address you signed up with.');
      }
      return NextResponse.json({ 
        error: resendError.message,
        details: "Email failed to send. Check if you are in Resend Sandbox mode."
      }, { status: 500 });
    }

    console.log('✅ Email sent successfully via Resend');
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
