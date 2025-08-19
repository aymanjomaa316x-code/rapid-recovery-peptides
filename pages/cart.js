// pages/cart.js
import Head from "next/head";
import Header from "../components/Header";
import { useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, updateQty, remove, total, clear } = useCart();
  const paypalRef = useRef(null);

  // ---- Stripe: start checkout on button click (optional) ----
  async function checkoutWithStripe() {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(({ name, price, qty }) => ({ name, price, qty })),
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/cancel`,
        }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert(data?.error || "Unable to start Stripe checkout.");
      }
    } catch (e) {
      console.error(e);
      alert("Stripe checkout failed.");
    }
  }
  // ---- Stripe end ----

  // ---- PayPal: load SDK + render a single cart button ----
  useEffect(() => {
    if (!items.length) {
      if (paypalRef.current) paypalRef.current.innerHTML = "";
      return;
    }

    const existing = document.getElementById("paypal-sdk");
    if (existing) {
      renderButtons();
    } else {
      const script = document.createElement("script");
      script.id = "paypal-sdk";
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=AUD&intent=capture`;
      script.onload = renderButtons;
      document.body.appendChild(script);
    }

    function renderButtons() {
      if (!window.paypal || !paypalRef.current) return;
      paypalRef.current.innerHTML = "";
      window.paypal
        .Buttons({
          style: { layout: "vertical", shape: "rect", label: "paypal" },
          createOrder: (_, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Rapid Recovery Peptides Order",
                  amount: { currency_code: "AUD", value: total.toFixed(2) },
                },
              ],
            });
          },
          onApprove: async (_, actions) => {
            const details = await actions.order.capture();
            clear();
            window.location.href = `/success?orderId=${encodeURIComponent(details?.id || "")}`;
          },
          onError: () => {
            window.location.href = "/cancel";
          },
        })
        .render(paypalRef.current);
    }
  }, [items, total, clear]);
  // ---- PayPal end ----

  return (
    <>
      <Head><title>Cart — Rapid Recovery Peptides</title></Head>
      <div className="min-h-screen bg-blackCustom text-white">
        <Header />

        <div className="mx-auto max-w-4xl px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-goldLight to-goldDark bg-clip-text text-transparent">
            Cart
          </h1>

          {!items.length ? (
            <p className="mt-8 text-center text-neutral-300">Your cart is empty.</p>
          ) : (
            <>
              <div className="mt-8 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.sku}
                    className="flex items-center justify-between rounded-xl border border-neutral-800/70 bg-neutral-950/40 p-4"
                  >
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-neutral-400">
                        ${Number(item.price).toFixed(2)} each
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min={1}
                        max={999}
                        value={item.qty}
                        onChange={(e) => updateQty(item.sku, Number(e.target.value) || 1)}
                        className="w-16 text-center rounded border border-neutral-700 bg-black/40 text-white text-sm py-1"
                      />
                      <button
                        onClick={() => remove(item.sku)}
                        className="text-sm rounded border border-neutral-700 px-3 py-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-neutral-300 text-sm">
                  Products are for laboratory research use only. Not for human consumption.
                </div>
                <div className="text-xl">
                  Total: <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout buttons: Stripe (optional) + PayPal */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {/* Stripe button (optional) */}
                <button
                  onClick={checkoutWithStripe}
                  disabled={!items.length}
                  className="rounded-xl px-6 py-3 text-sm font-semibold bg-white text-black hover:opacity-90 disabled:opacity-50"
                >
                  Pay with Stripe
                </button>

                {/* PayPal renders into this container */}
                <div className="flex-1" ref={paypalRef} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
