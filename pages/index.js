import Head from "next/head";

// Rapid Recovery Peptides — Home (Next.js + Tailwind)
// Header: gold nav (no logo). Hero: big heading, large logo, under‑construction line, subheadline, CTA.
// Featured: 220px bottle banner above products. Footer: gold legal text.

export default function HomePage() {
  const colors = {
    black: "#0B0B0B",
    goldLight: "#D8B85A",
    goldDark: "#B8902E",
  };

  const products = [
    { name: "BPC-157 10mg", price: 150, href: "/products/bpc-157-10mg", image: "/products/banner.png" },
    { name: "TB-500 10mg", price: 150, href: "/products/tb-500-10mg", image: "/products/banner.png" },
    { name: "Bacteriostatic Water 10ml", price: 30, href: "/products/bacteriostatic-water-10ml", image: "/products/banner.png" },
  ];

  return (
    <>
      <Head>
        <title>Rapid Recovery Peptides — Premium Research Peptides (AU)</title>
        <meta name="description" content="Australia's trusted source for premium peptides. Lab-tested. Fast shipping." />
      </Head>

      <div className="min-h-screen text-white flex flex-col items-center" style={{ backgroundColor: colors.black }}>
        {/* Subtle gold glow background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 opacity-[0.06]" style={{
          backgroundImage:
            "radial-gradient(1500px 600px at -10% -10%, rgba(216,184,90,0.25), rgba(0,0,0,0)), radial-gradient(1200px 500px at 110% 110%, rgba(184,144,46,0.25), rgba(0,0,0,0))",
        }} />

        {/* HEADER (gold nav, no logo) */}
        <header className="w-full">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center justify-center py-5">
              <nav className="flex gap-10 text-xl font-bold" style={{ color: colors.goldLight }}>
                <a href="/" className="no-underline hover:text-[#B8902E]">Homepage</a>
                <a href="/products" className="no-underline hover:text-[#B8902E]">Products</a>
                <a href="/contact" className="no-underline hover:text-[#B8902E]">Contact</a>
                <a href="/cart" className="no-underline rounded-full border px-4 py-1 hover:text-[#B8902E]" style={{ borderColor: colors.goldDark }}>Cart</a>
              </nav>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight" style={{
              backgroundImage: `linear-gradient(90deg, ${colors.goldLight}, ${colors.goldDark})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}>Recover faster. Train harder.</h1>

            {/* Large hero logo */}
            <img src="/logo.png" alt="Rapid Recovery Peptides Logo" className="mx-auto mt-6 mb-4 w-[320px] md:w-[520px]" />

            {/* Under-construction line under the logo */}
            <p className="text-3xl md:text-5xl" style={{ color: colors.goldLight }}>
              Website currently under construction — Please email{' '}
              <a href="mailto:info@rapidrecoverypeptides.com.au" className="underline">info@rapidrecoverypeptides.com.au</a>{' '}to buy peptides or for more info.
            </p>

            {/* Subheadline */}
            <p className="mt-4 text-xl md:text-2xl text-neutral-200">
              Australia&apos;s trusted source for premium peptides. Lab-tested. Fast shipping.
            </p>

            <div className="mt-8">
              <a href="/products" className="inline-block rounded-xl px-8 py-4 text-lg font-medium shadow-sm hover:scale-[1.02] transition" style={{
                backgroundImage: `linear-gradient(90deg, ${colors.goldLight}, ${colors.goldDark})`,
                color: "#0B0B0B",
              }}>View Products</a>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4 pt-10 text-center isolate">
            {/* Bottle banner above products (220px max width). Use transparent PNG for best results. */}
            <img src="/products/banner.png" alt="Rapid Recovery Peptides bottle" className="mx-auto h-auto object-contain max-w-[220px]" />

            <h2 className="text-5xl font-semibold mb-8 mt-8" style={{
              backgroundImage:`linear-gradient(90deg, ${colors.goldLight}, ${colors.goldDark})`,
              WebkitBackgroundClip:'text',
              color:'transparent'
            }}>Featured Products</h2>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <a key={p.name} href={p.href} className="group rounded-2xl border border-neutral-800/70 bg-neutral-950/40 p-4 transition hover:-translate-y-0.5 hover:border-neutral-700">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-black/30">
                    <img src={p.image} alt={p.name} className="h-full w-full object-contain p-6 transition group-hover:scale-[1.02]" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-lg font-medium text-neutral-100">{p.name}</h3>
                    <span className="rounded-md px-2 py-1 text-sm font-semibold" style={{
                      backgroundImage: `linear-gradient(90deg, ${colors.goldLight}, ${colors.goldDark})`,
                      color: "#0B0B0B",
                    }}>${p.price}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full mt-10 border-t border-neutral-900/80">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center">
            <img src="/logo.png" alt="Rapid Recovery Peptides" className="mx-auto h-10 w-auto mb-4" />
            <p className="text-sm" style={{ color: colors.goldLight }}>
              Contact: <a href="mailto:info@rapidrecoverypeptides.com.au" className="underline">info@rapidrecoverypeptides.com.au</a>
            </p>
            <ul className="mt-4 space-y-1 text-sm" style={{ color: colors.goldLight }}>
              <li><a href="/terms" className="hover:opacity-90">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:opacity-90">Privacy Policy</a></li>
              <li><a href="/returns" className="hover:opacity-90">Returns & Shipping</a></li>
            </ul>
            <p className="mt-8 text-xs leading-relaxed" style={{ color: colors.goldLight }}>
              Disclaimer: Products are sold for laboratory research and development purposes only. Not for human consumption, medical, veterinary, or household use. No statements on this site have been evaluated by the TGA. By purchasing, you agree to our Terms & Conditions.
            </p>
            <p className="mt-4 text-xs" style={{ color: colors.goldLight }}>© {new Date().getFullYear()} Rapid Recovery Peptides. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
