import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rapid Recovery Peptides</title>
      </Head>
      <main className="min-h-screen bg-black text-yellow-400 flex flex-col justify-center items-center p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-widest">Rapid Recovery Peptides</h1>
          <p className="text-lg max-w-2xl text-yellow-300">
            Premium peptides for optimal recovery, performance, and wellness. Explore our growing range of research-grade products.
          </p>
        </div>

        <Image
          src="/logo.png"
          alt="Rapid Recovery Peptides Logo"
          width={180}
          height={180}
          className="rounded-full border-4 border-yellow-500"
        />

        <Link href="/products">
          <span className="mt-6 inline-block bg-yellow-400 text-black text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition">
            Browse Products
          </span>
        </Link>

        <section className="mt-12 w-full max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Trending Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-black border border-yellow-400 p-4 rounded-lg shadow text-yellow-300 text-center">
              <Image src="/products/bpc157.png" alt="BPC-157" width={150} height={150} className="mx-auto mb-2" />
              <h3 className="font-semibold text-lg">BPC-157 10mg</h3>
              <p className="mb-2">$150.00</p>
              <Link href="/products">
                <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">Buy Now</span>
              </Link>
            </div>
            <div className="bg-black border border-yellow-400 p-4 rounded-lg shadow text-yellow-300 text-center">
              <Image src="/products/tb500.png" alt="TB-500" width={150} height={150} className="mx-auto mb-2" />
              <h3 className="font-semibold text-lg">TB-500 10mg</h3>
              <p className="mb-2">$150.00</p>
              <Link href="/products">
                <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">Buy Now</span>
              </Link>
            </div>
            <div className="bg-black border border-yellow-400 p-4 rounded-lg shadow text-yellow-300 text-center">
              <Image src="/products/bacteriostatic.png" alt="Bacteriostatic Water" width={150} height={150} className="mx-auto mb-2" />
              <h3 className="font-semibold text-lg">Bacteriostatic Water 10ml</h3>
              <p className="mb-2">$30.00</p>
              <Link href="/products">
                <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">Buy Now</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Peptides</h2>
          <p className="text-yellow-300">
            <strong>Peptides</strong> are cutting-edge compounds designed to accelerate healing, enhance recovery, and support optimal physical performance. Backed by scientific research, our premium-grade peptides are trusted by athletes, biohackers, and wellness enthusiasts for their powerful regenerative properties. Whether you're recovering from injury, reducing inflammation, or looking to push your body to new limits—Rapid Recovery Peptides delivers pure, research-grade solutions you can count on. Experience the next level of recovery.
          </p>
        </section>

        <footer className="w-full border-t border-yellow-800 mt-16 pt-8 text-center text-yellow-300 text-sm">
          <p className="max-w-4xl mx-auto px-4">
            All peptide compounds offered are of premium quality and intended solely for research purposes. None of the statements made on this site or blog have been reviewed by the FDA or any international regulatory body. These products are not designed to diagnose, treat, cure, or prevent any disease or condition. They are strictly for research use only.
          </p>
          <p className="mt-4">&copy; {new Date().getFullYear()} Rapid Recovery Peptides</p>
        </footer>
      </main>
    </>
  );
}
