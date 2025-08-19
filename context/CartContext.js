// context/CartContext.js
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("rrp_cart");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("rrp_cart", JSON.stringify(items));
    }
  }, [items]);

  const add = (product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x.sku === product.sku);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: Math.min(999, next[idx].qty + qty) };
        return next;
      }
      return [...prev, { ...product, qty }];
    });
  };

  const remove = (sku) => setItems((prev) => prev.filter((x) => x.sku !== sku));
  const updateQty = (sku, qty) =>
    setItems((prev) =>
      prev.map((x) => (x.sku === sku ? { ...x, qty: Math.max(1, Math.min(999, qty)) } : x))
    );
  const clear = () => setItems([]);

  const total = useMemo(
    () => items.reduce((sum, x) => sum + x.qty * Number(x.price), 0),
    [items]
  );

  const value = { items, add, remove, updateQty, clear, total, count: items.reduce((n, x) => n + x.qty, 0) };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
