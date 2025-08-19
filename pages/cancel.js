import Head from "next/head";

export default function Cancel() {
  return (
    <>
      <Head><title>Payment Cancelled — Rapid Recovery Peptides</title></Head>
      <div className="min-h-screen bg-blackCustom text-white flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-goldLight to-goldDark bg-clip-text text-transparent">
            Payment cancelled
          </h1>
          <p className="mt-4 text-neutral-300">Your order was not completed. You can try again anytime.</p>
          <a href="/cart" className="inline-block mt-6 rounded-xl px-6 py-3 bg-gradient-to-r from-goldLight to-goldDark text-black">
            Return to Cart
          </a>
        </div>
      </div>
    </>
  );
}
