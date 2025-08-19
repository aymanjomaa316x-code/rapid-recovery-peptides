// pages/products/[slug].js
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/Header";
import { PRODUCTS, PRODUCT_IMAGE, RESEARCH_NOTE } from "../../lib/products";
import QuantityPicker from "../../components/QuantityPicker";
import { useCart } from "../../context/CartContext";

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { add } = useCart();

  const product = PRODUCTS.find((p) => p.sku === slug);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <>
        <Head><title>Product not found — Rapid Recovery Peptides</title></Head>
        <div className="min-h-screen bg-blackCustom text-white">
          <Header />
          <div className="mx-auto max-w-4xl px-4 py-16 text-center">
            <h1 className="text-3xl font-bold">Product not found</h1>
            <p className="mt-3 text-neutral-400">
              Please go back to the <a href="/products" className="underline">Products</a> page.
            </p>
          </div>
        </div>
      </>
    );
  }

  const total = (Number(product.price) * qty).toFixed(2);

  return (
    <>
      <Head>
        <title>{product.name} — Rapid Recovery Peptides</title>
        <meta name="description" content={`${product.name} — ${RESEARCH_NOTE}`} />
      </Head>

      <div className="min-h-screen bg-blackCustom text-white">
        <Header />

        <main className="mx-auto max-w-5xl px-4 py-12">
          {/* Breadcrumbs */}
          <nav className="text-sm text-neutral-400 mb-6">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/products" className="hover:underline">Products</a>
            <span className="mx-2">›</span>
            <span className="text-goldLight">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="rounded-2xl bg-neutral-950/40 border border-neutral-800/70 p-6">
              <div className="relative aspect-[4/5] bg-black/30 rounded-xl flex items-center justify-center overflow-hidden">
                {product.oos && (
                  <span className="absolute top-3 right-3 rounded bg-red-600/90 px-2 py-1 text-xs font-semibold">
                    Out of stock
                  </span>
                )}
                <img src={PRODUCT_IMAGE} alt={product.name} className="h-full w-full object-contain p-6" />
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-goldLight to-goldDark bg-clip-text text-transparent">
                {product.name}
              </h1>

              <p className="mt-4 text-neutral-300 text-sm">{RESEARCH_NOTE}</p>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-2xl">
                  <span className="rounded-md px-2 py-1 text-base font-semibold bg-gradient-to-r from-goldLight to-goldDark text-black">
                    ${Number(product.price).toFixed(2)}
                  </span>{" "}
                  <span className="text-neutral-400 text-sm">per unit</span>
                </div>

                <QuantityPicker value={qty} onChange={setQty} min={1} max={10} />
              </div>

              <div className="mt-4 text-sm text-neutral-400">
                Total: <span className="text-neutral-100 font-semibold">${total}</span>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  disabled={product.oos}
                  onClick={() => add({ sku: product.sku, name: product.name, price: product.price }, qty)}
                  className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    product.oos
                      ? "opacity-50 cursor-not-allowed border border-neutral-800"
                      : "bg-gradient-to-r from-goldLight to-goldDark text-black hover:scale-[1.02]"
                  }`}
                >
                  {product.oos ? "Unavailable" : "Add to Cart"}
                </button>

                <a
                  href="/cart"
                  className="rounded-xl px-5 py-3 text-sm font-semibold border border-neutral-800 hover:border-neutral-700"
                >
                  Go to Cart
                </a>
              </div>

              <div className="mt-8 text-xs text-neutral-500">
                For laboratory research use only. Not for human consumption. No statements have been evaluated by the TGA.
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
