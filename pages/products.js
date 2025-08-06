// File: pages/products.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const products = [
    { slug: 'bpc-157-10mg', name: 'BPC-157 10mg', price: '$150.00', image: '/products/bpc157.png' },
    { slug: 'tb-500-10mg', name: 'TB-500 10mg', price: '$150.00', image: '/products/tb500.png' },
    { slug: 'bacteriostatic-water-10ml', name: 'Bacteriostatic Water 10ml', price: '$30.00', image: '/products/bacteriostatic.png' },
  ];

  return (
    <main className="bg-black text-yellow-300 min-h-screen py-12 px-6">
      <Head>
        <title>Our Products | Rapid Recovery Peptides</title>
      </Head>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-yellow-400">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <Image src={product.image} alt={product.name} width={160} height={160} className="mb-4 rounded-md" />
              <h2 className="text-xl font-semibold text-yellow-200 mb-2">{product.name}</h2>
              <p className="mb-4">{product.price}</p>
              <Link href={`/product/${product.slug}`} className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
