export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log contact form submission
    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, log to console and return success
    console.log('📬 Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      sendTo: 'hello@besscareers.com',
    });

    return Response.json(
      { success: true, message: 'Thank you! We\'ll get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
