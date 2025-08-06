import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const products = [
    { name: 'BPC-157 10mg', price: '$150.00', image: '/products/banner.png' },
    { name: 'TB-500 10mg', price: '$150.00', image: '/products/banner.png' },
    { name: 'Bacteriostatic Water 10ml', price: '$30.00', image: '/products/banner.png' },
    { name: 'CJC-1295 w/ DAC 2mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'CJC-1295 no DAC 2mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'Ipamorelin 2mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'GHRP-2 5mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'GHRP-6 5mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'GHRP-2 2mg', price: '$75.00', image: '/products/banner.png' },
    { name: 'GHRP-6 2mg', price: '$75.00', image: '/products/banner.png' },
    { name: 'Mod GRF 1-29 2mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'Hexarelin 2mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'Melanotan 2 10mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'PT-141 10mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'DSIP 5mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'Selank 5mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'Semax 5mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'Thymosin Alpha-1 10mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'Thymosin Beta-4 2mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'AOD-9604 2mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'AOD-9604 5mg', price: '$110.00', image: '/products/banner.png' },
    { name: 'PEG-MGF 2mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'MGF 2mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'Gonadorelin 2mg', price: '$90.00', image: '/products/banner.png' },
    { name: 'HCG 5000iu', price: '$90.00', image: '/products/banner.png' },
    { name: 'HMG 75iu', price: '$150.00', image: '/products/banner.png' },
    { name: 'IGF-1 LR3 1mg', price: '$110.00', image: '/products/banner.png' },
    { name: 'IGF-1 DES 1mg', price: '$110.00', image: '/products/banner.png' }
  ];

  return (
    <>
      <Head>
        <title>Our Products - Rapid Recovery Peptides</title>
      </Head>
      <main className="p-4 md:p-12 bg-black text-yellow-400 min-h-screen">
        <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide border-b border-yellow-500 pb-4">Our Products</h1>

        <div className="flex justify-center mb-10">
          <Image
            src="/products/banner.png"
            alt="Rapid Recovery Peptides Banner"
            width={600}
            height={300}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-yellow-500 rounded-lg shadow-lg p-5 hover:shadow-yellow-400 transition duration-300">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="mx-auto rounded"
              />
              <h2 className="mt-4 text-xl font-bold text-center text-black">{product.name}</h2>
              <p className="text-center text-yellow-700 text-lg font-semibold">{product.price}</p>
              <div className="flex justify-center mt-4">
                <Link href="/checkout">
                  <span className="bg-black text-yellow-400 border border-yellow-500 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition font-medium">
                    Buy Now
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
