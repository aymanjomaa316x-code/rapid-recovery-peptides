import Head from "next/head";
import { useRouter } from "next/router";

export default function Success() {
  const { query } = useRouter();
  return (
    <>
      <Head><title>Payment Successful — Rapid Recovery Peptides</title></Head>
      <div className="min-h-screen bg-blackCustom text-white flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-goldLight to-goldDark bg-clip-text text-transparent">
            Thank you!
          </h1>
          <p className="mt-4 text-neutral-300">
            Your payment was successful. {query.orderId ? `Order ID: ${query.orderId}` : ""}
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Products are for laboratory research use only. Not for human consumption.
          </p>
          <a href="/products" className="inline-block mt-6 rounded-xl px-6 py-3 bg-gradient-to-r from-goldLight to-goldDark text-black">
            Continue Shopping
          </a>
        </div>
      </div>
    </>
  );
}
