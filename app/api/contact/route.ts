export async function POST(request: Request) {
  try {
    const { name, email, message, website } = await request.json();

    // Honeypot check — reject if bot filled the hidden field
    if (website && website.trim() !== '') {
      console.log('🚨 Bot detected via honeypot field on BESScareers contact form');
      return Response.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Rate limiting check (basic IP extraction from headers)
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown';

    // Simple in-memory rate limiting (resets on server restart)
    // Note: For production, should use Redis or database
    const rateLimitMap = new Map<string, number[]>();
    const oneHourAgo = Date.now() - 60 * 60 * 1000;

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, []);
    }

    const timestamps = rateLimitMap.get(ip)!;
    const recentSubmissions = timestamps.filter(t => t > oneHourAgo);

    if (recentSubmissions.length >= 5) {
      console.log(`🚫 Rate limit exceeded for IP ${ip} on BESScareers contact form`);
      return Response.json(
        { error: 'Too many submissions. Please try again in an hour.' },
        { status: 429 }
      );
    }

    recentSubmissions.push(Date.now());
    rateLimitMap.set(ip, recentSubmissions);

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
