// pages/api/create-checkout-session.js
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecret ? new Stripe(stripeSecret, { apiVersion: "2024-06-20" }) : null;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!stripeSecret || !stripe) return res.status(501).json({ error: "Stripe not configured" });

  try {
    const { items, success_url, cancel_url } = req.body; // items = [{ name, price, qty }]
    const line_items = (items || []).map((it) => ({
      quantity: it.qty,
      price_data: {
        currency: "aud",
        unit_amount: Math.round(Number(it.price) * 100), // dollars -> cents
        product_data: { name: it.name },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: success_url || `${req.headers.origin}/success`,
      cancel_url: cancel_url || `${req.headers.origin}/cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe error", err);
    return res.status(500).json({ error: "Stripe error", details: err.message });
  }
}
