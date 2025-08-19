// components/Header.js
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((n, it) => n + it.qty, 0);

  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center py-5">
          <nav className="flex gap-10 text-xl font-bold text-goldLight">
            <Link href="/" className="no-underline hover:text-goldDark">Homepage</Link>
            <Link href="/products" className="no-underline hover:text-goldDark">Products</Link>
            <Link href="/contact" className="no-underline hover:text-goldDark">Contact</Link>

            {/* Cart + count badge */}
            <Link
              href="/cart"
              className="relative no-underline rounded-full border px-4 py-1 hover:text-goldDark border-goldDark"
            >
              Cart
              {count > 0 && (
                <span
                  className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] px-1
                             rounded-full bg-goldLight text-black text-xs font-bold
                             flex items-center justify-center"
                  aria-label={`Cart items: ${count}`}
                >
                  {count}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
