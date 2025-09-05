import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // In production, you would:
    // 1. Save to a database
    // 2. Send confirmation email via SendGrid/similar
    // 3. Send notification to restaurant staff
    
    // For now, just log the reservation
    console.info('New reservation:', {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // In development, you could write to a file (but not in Netlify Edge Functions)
    if (process.env.NODE_ENV === 'development') {
      // Note: File system operations won't work on Netlify Edge Functions
      // This is just for local development
      console.log('Development mode: Would save to /tmp/reservations.json');
    }

    // TODO: Integrate with SendGrid or another email service
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: data.email,
    //   from: 'reservations@saffronandsong.co.uk',
    //   subject: 'Reservation Confirmation - Saffron & Song',
    //   text: `Your reservation for ${data.partySize} people on ${data.date} at ${data.time} has been confirmed.`,
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Reservation received',
        reservationId: `RES-${Date.now()}` 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Reservation error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process reservation' },
      { status: 500 }
    );
  }
}