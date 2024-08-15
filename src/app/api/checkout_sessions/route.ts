import { NextResponse } from 'next/server';
import stripe from '@/config/stripe.config';

export async function POST(req: Request) {
  try {
    const origin = req.headers.get('origin');

    const { cartItems } = await req.json();

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { error: 'Invalid cart items' },
        {
          status: 400,
          headers: { 'Access-Control-Allow-Origin': origin || '*' },
        }
      );
    }

    const line_items = cartItems.map(
      (item: { priceId: string; quantity: number }) => ({
        price: item.priceId,
        quantity: item.quantity,
      })
    );

    console.log(line_items);

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${origin}/thank-you`,
      cancel_url: `${origin}/`,
    });

    const response = NextResponse.json({ url: session.url });
    response.headers.set('Access-Control-Allow-Origin', origin || '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  } catch (error) {
    console.error('Error in creating checkout session:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}

export async function OPTIONS(req: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': req.headers.get('origin') || '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
