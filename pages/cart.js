import Head from "next/head";
import { useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, updateQty, remove, total, clear } = useCart();
  const paypalRef = useRef(null);

  // Load PayPal SDK and render a single button for the whole cart
  useEffect(() => {
    if (!items.length) {
      if (paypalRef.current) paypalRef.current.innerHTML = "";
      return;
    }

    const existing = document.getElementById("paypal-sdk");
    if (existing) {
      renderButtons();
      return;
    }
    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=AUD&intent=capture`;
    script.onload = renderButtons;
    document.body.appendChild(script);

    function renderButtons() {
      if (!window.paypal || !paypalRef.current) return;
      paypalRef.current.innerHTML = "";
      window.paypal.Buttons({
        style: { layout: "vertical", shape: "rect", label: "paypal" },
        createOrder: (_, actions) => {
          // Simple cart total (AUD). Could pass item breakdown if needed.
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
        onError: (err) => {
          console.error("PayPal error", err);
          window.location.href = "/cancel";
        },
      }).render(paypalRef.current);
    }
  }, [items, total, clear]);

  return (
    <>
      <Head><title>Cart — Rapid Recovery Peptides</title></Head>
      <div className="min-h-screen bg-blackCustom text-white">
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
                  <div key={item.sku} className="flex items-center justify-between rounded-xl border border-neutral-800/70 bg-neutral-950/40 p-4">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-neutral-400">${Number(item.price).toFixed(2)} each</div>
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
                      <button onClick={() => remove(item.sku)} className="text-sm rounded border border-neutral-700 px-3 py-1">
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

              <div className="mt-6" ref={paypalRef} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
