// pages/contact.js
import Head from "next/head";
import Header from "../components/Header";
import { useCallback } from "react";

export default function ContactPage() {
  const email = "info@rapidrecoverypeptides.com.au";

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const from = (data.get("email") || "").toString().trim();
    const msg  = (data.get("message") || "").toString().trim();

    const subject = `Website enquiry from ${name || "customer"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${from}`,
      "",
      "Message:",
      msg
    ].join("\n");

    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Open user’s mail app without submitting a form
    window.location.href = mailto;
  }, []);

  return (
    <>
      <Head>
        <title>Contact — Rapid Recovery Peptides</title>
        <meta name="description" content="Contact Rapid Recovery Peptides." />
      </Head>

      <div className="min-h-screen bg-blackCustom text-white flex flex-col">
        {/* subtle background glow */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(1500px 600px at -10% -10%, rgba(216,184,90,0.25), rgba(0,0,0,0)), radial-gradient(1200px 500px at 110% 110%, rgba(184,144,46,0.25), rgba(0,0,0,0))",
          }}
        />

        <Header />

        <main className="w-full">
          <div className="mx-auto max-w-3xl px-4 py-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-goldLight to-goldDark bg-clip-text text-transparent">
              Contact Us
            </h1>

            <p className="mt-4 text-lg md:text-xl text-neutral-200">
              Prefer email?{" "}
              <a href={`mailto:${email}`} className="underline text-goldLight">
                {email}
              </a>
            </p>

            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-goldLight to-goldDark rounded-full" />

            <section className="mt-10 text-left">
              <div className="rounded-2xl border border-neutral-800/70 bg-neutral-950/40 p-6">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-goldLight to-goldDark bg-clip-text text-transparent">
                  Send a Message
                </h2>
                <p className="mt-2 text-sm text-neutral-400">
                  This opens your mail app with the details pre-filled.
                </p>

                {/* NOTE: no action/method; we handle submit in JS */}
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm text-neutral-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-md border border-neutral-700 bg-black/40 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-goldDark"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-md border border-neutral-700 bg-black/40 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-goldDark"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-300 mb-1">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-md border border-neutral-700 bg-black/40 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-goldDark"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="rounded-xl px-6 py-3 text-sm font-semibold bg-gradient-to-r from-goldLight to-goldDark text-black hover:scale-[1.02] transition"
                    >
                      Email Us
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-xs text-neutral-500">
                  Products are sold for laboratory research use only. Not for human consumption. No statements on this site have been evaluated by the TGA.
                </p>
              </div>
            </section>
          </div>
        </main>

        <footer className="mt-auto w-full border-t border-neutral-900/80">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center">
            <img src="/logo.png" alt="Rapid Recovery Peptides" className="mx-auto h-10 w-auto mb-4" />
            <p className="text-sm text-goldLight">
              Contact: <a href={`mailto:${email}`} className="underline">{email}</a>
            </p>
            <ul className="mt-4 space-y-1 text-sm text-goldLight">
              <li><a href="/terms" className="hover:opacity-90">Terms &amp; Conditions</a></li>
              <li><a href="/privacy" className="hover:opacity-90">Privacy Policy</a></li>
              <li><a href="/returns" className="hover:opacity-90">Returns &amp; Shipping</a></li>
            </ul>
            <p className="mt-4 text-xs text-goldLight">© {new Date().getFullYear()} Rapid Recovery Peptides. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
