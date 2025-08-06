
import Stripe from 'stripe';

const stripe = new Stripe('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');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { cart, total } = req.body;

    const line_items = cart.map(item => ({
      price_data: {
        currency: 'AUD',
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.qty,
    }));

    line_items.push({
      price_data: {
        currency: 'AUD',
        product_data: { name: 'Delivery Fee' },
        unit_amount: 100 * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
