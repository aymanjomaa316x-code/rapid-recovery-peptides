// File: pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const products = [
    { slug: 'bpc-157-10mg', name: 'BPC-157 10mg', price: '$150.00', image: '/products/bpc157.png' },
    { slug: 'tb-500-10mg', name: 'TB-500 10mg', price: '$150.00', image: '/products/tb500.png' },
    { slug: 'bacteriostatic-water-10ml', name: 'Bacteriostatic Water 10ml', price: '$30.00', image: '/products/bacteriostatic.png' },
  ];

  return (
    <main className="bg-black text-yellow-300 min-h-screen font-sans">
      <Head>
        <title>Rapid Recovery Peptides</title>
      </Head>

      <section className="text-center py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <Image src="/logo.png" alt="Rapid Recovery Logo" width={180} height={180} className="mb-4" />
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">Rapid Recovery Peptides</h1>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Premium peptides for optimal recovery, performance, and wellness. Explore our growing range of research-grade products.
          </p>
          <Link href="/products" className="inline-block bg-yellow-400 text-black font-medium px-6 py-3 rounded-full hover:bg-yellow-500 transition">
            Browse Products
          </Link>
        </div>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-yellow-400 mb-10">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition duration-300 flex flex-col items-center text-center">
              <Image src={product.image} alt={product.name} width={160} height={160} className="mb-4 rounded-md" />
              <h3 className="text-xl font-semibold text-yellow-200 mb-2">{product.name}</h3>
              <p className="mb-4">{product.price}</p>
              <Link href={`/product/${product.slug}`} className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-6 bg-[#1a1a1a] text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Peptides</h2>
        <p className="max-w-4xl mx-auto text-yellow-200 text-lg">
          <strong>Peptides</strong> are cutting-edge compounds designed to accelerate healing, enhance recovery, and support optimal physical performance. Backed by scientific research, our premium-grade peptides are trusted by athletes, biohackers, and wellness enthusiasts for their powerful regenerative properties. Whether you're recovering from injury, reducing inflammation, or looking to push your body to new limits—Rapid Recovery Peptides delivers pure, research-grade solutions you can count on. Experience the next level of recovery.
        </p>
      </section>

      <footer className="bg-black text-yellow-400 text-sm py-8 px-6 border-t border-yellow-700 max-w-7xl mx-auto">
        <div className="text-center">
          <p className="mb-2">
            All peptide compounds offered are of premium quality and intended solely for research purposes. None of the statements made on this site or blog have been reviewed by the FDA or any international regulatory body. These products are not designed to diagnose, treat, cure, or prevent any disease or condition. They are strictly for research use only.
          </p>
          <p className="text-yellow-500">© 2025 Rapid Recovery Peptides</p>
        </div>
      </footer>
    </main>
  );
}
