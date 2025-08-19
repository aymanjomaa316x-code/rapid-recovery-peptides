// at the top
import { useEffect, useRef } from "react";

// inside CartPage component:
const paypalRef = useRef(null);

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
    window.paypal.Buttons({
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
    }).render(paypalRef.current);
  }
}, [items, total, clear]);

// …later in the JSX:
<div className="mt-6" ref={paypalRef} />
