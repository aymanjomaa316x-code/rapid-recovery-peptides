import Head from "next/head";
import Header from "../../components/Header";            // ← add this
import { useState } from "react";
import { PRODUCTS, PRODUCT_IMAGE, RESEARCH_NOTE } from "../../lib/products";
import QuantityPicker from "../../components/QuantityPicker";
import { useCart } from "../../context/CartContext";

export default function ProductsPage() {
  const { add } = useCart();
  const [qtyMap, setQtyMap] = useState(() =>
    Object.fromEntries(PRODUCTS.map(p => [p.sku, 1]))
  );
  const setQty = (sku, q) => setQtyMap((m) => ({ ...m, [sku]: q }));

  return (
    <>
      <Head><title>Products — Rapid Recovery Peptides</title></Head>
      <div className="min-h-screen bg-blackCustom text-white">
        <Header />                                       {/* ← add this */}

        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-goldLight to-goldDark bg-clip-text text-transparent">
            Products
          </h1>
          <p className="mt-4 text-center text-neutral-300 text-sm">{RESEARCH_NOTE}</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => {
              const q = qtyMap[p.sku] ?? 1;
              return (
                <div key={p.sku} className="rounded-2xl border border-neutral-800/70 bg-neutral-950/40 p-5">
                  <div className="relative aspect-[4/5] rounded-xl bg-black/30 flex items-center justify-center overflow-hidden">
                    {p.oos && (
                      <span className="absolute top-3 right-3 rounded bg-red-600/90 px-2 py-1 text-xs font-semibold">
                        Out of stock
                      </span>
                    )}
                    <img src={PRODUCT_IMAGE} alt={p.name} className="h-full w-full object-contain p-6" />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <a href={`/products/${p.sku}`} className="text-lg font-medium hover:underline">
                      {p.name}
                    </a>
                    <span className="rounded-md px-2 py-1 text-sm font-semibold bg-gradient-to-r from-goldLight to-goldDark text-black">
                      ${p.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="mt-3 text-xs text-neutral-400">
                    For laboratory research use only. Not for human consumption.
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <QuantityPicker value={q} onChange={(v) => setQty(p.sku, v)} />
                    <button
                      disabled={p.oos}
                      onClick={() => add({ sku: p.sku, name: p.name, price: p.price }, q)}
                      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                        p.oos
                          ? "opacity-50 cursor-not-allowed border border-neutral-800"
                          : "bg-gradient-to-r from-goldLight to-goldDark text-black hover:scale-[1.02]"
                      }`}
                    >
                      {p.oos ? "Unavailable" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
