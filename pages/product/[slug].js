// File: pages/product/[slug].js
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const allProducts = {
  'bpc-157-10mg': { name: 'BPC-157 10mg', price: 150.0, image: '/products/bpc157.png' },
  'tb-500-10mg': { name: 'TB-500 10mg', price: 150.0, image: '/products/tb500.png' },
  'bacteriostatic-water-10ml': { name: 'Bacteriostatic Water 10ml', price: 30.0, image: '/products/bacteriostatic.png' },
  'cjc-1295-dac-2mg': { name: 'CJC-1295 w/ DAC 2mg', price: 90.0, image: '/products/banner.png' },
  'cjc-1295-no-dac-2mg': { name: 'CJC-1295 No DAC 2mg', price: 90.0, image: '/products/banner.png' },
  'ipamorelin-2mg': { name: 'Ipamorelin 2mg', price: 90.0, image: '/products/banner.png' },
  'ghrp-2-5mg': { name: 'GHRP-2 5mg', price: 90.0, image: '/products/banner.png' },
  'ghrp-6-5mg': { name: 'GHRP-6 5mg', price: 90.0, image: '/products/banner.png' },
  'ghrp-2-2mg': { name: 'GHRP-2 2mg', price: 75.0, image: '/products/banner.png' },
  'ghrp-6-2mg': { name: 'GHRP-6 2mg', price: 75.0, image: '/products/banner.png' },
  'mod-grf-1-29-2mg': { name: 'Mod GRF 1-29 2mg', price: 90.0, image: '/products/banner.png' },
  'hexarelin-2mg': { name: 'Hexarelin 2mg', price: 90.0, image: '/products/banner.png' },
  'melanotan-2-10mg': { name: 'Melanotan 2 10mg', price: 90.0, image: '/products/banner.png' },
  'pt-141-10mg': { name: 'PT-141 10mg', price: 90.0, image: '/products/banner.png' },
  'dsip-5mg': { name: 'DSIP 5mg', price: 90.0, image: '/products/banner.png' },
  'selank-5mg': { name: 'Selank 5mg', price: 90.0, image: '/products/banner.png' },
  'semax-5mg': { name: 'Semax 5mg', price: 90.0, image: '/products/banner.png' },
  'thymosin-alpha-1-10mg': { name: 'Thymosin Alpha-1 10mg', price: 90.0, image: '/products/banner.png' },
  'thymosin-beta-4-2mg': { name: 'Thymosin Beta-4 2mg', price: 90.0, image: '/products/banner.png' },
  'aod-9604-2mg': { name: 'AOD-9604 2mg', price: 90.0, image: '/products/banner.png' },
  'aod-9604-5mg': { name: 'AOD-9604 5mg', price: 110.0, image: '/products/banner.png' },
  'peg-mgf-2mg': { name: 'PEG-MGF 2mg', price: 90.0, image: '/products/banner.png' },
  'mgf-2mg': { name: 'MGF 2mg', price: 90.0, image: '/products/banner.png' },
};

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  const product = allProducts[slug];
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="text-white p-10">Loading...</div>;

  const finalPrice = quantity >= 10 ? product.price * 0.9 : product.price;
  const totalPrice = finalPrice * quantity;

  return (
    <main className="bg-black text-yellow-300 min-h-screen py-12 px-6">
      <Head>
        <title>{product.name} | Rapid Recovery Peptides</title>
      </Head>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <Image src={product.image} alt={product.name} width={220} height={220} className="mb-6" />
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">{product.name}</h1>
        <p className="text-lg mb-4">Price: ${finalPrice.toFixed(2)} {quantity >= 10 && <span className="text-sm text-green-400">(10% bulk discount applied)</span>}</p>

        <div className="flex items-center gap-3 mb-6">
          <label className="text-sm">Qty:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-16 p-1 rounded text-black"
          />
        </div>

        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition">
          Add to Cart (${totalPrice.toFixed(2)})
        </button>
      </div>
    </main>
  );
}

