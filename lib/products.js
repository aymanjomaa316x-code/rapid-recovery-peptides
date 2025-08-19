// lib/products.js
// All prices in AUD (your +50% margin applied), using your bottle image for all.
// OOS items show a badge and disable purchase (you asked to include them).

export const PRODUCTS = [
  { sku: "bpc-157-10mg", name: "BPC-157 10mg", price: 150.00, oos: false },
  { sku: "tb-500-10mg", name: "TB-500 10mg", price: 150.00, oos: false },
  { sku: "bac-water-10ml", name: "Bacteriostatic Water 10ml", price: 30.00, oos: false },

  { sku: "cjc-1295-nodac-5mg", name: "CJC-1295 No DAC 5mg", price: 127.50, oos: false },
  { sku: "cjc-1295-dac-5mg", name: "CJC-1295 DAC 5mg", price: 142.50, oos: false },
  { sku: "dsip-5mg", name: "DSIP 5mg", price: 135.00, oos: false },
  { sku: "epitalon-10mg", name: "Epitalon 10mg", price: 89.95, oos: false },
  { sku: "ghk-cu-50mg", name: "GHK-Cu 50mg", price: 133.50, oos: false },
  { sku: "ghrp-2-10mg", name: "GHRP-2 10mg", price: 73.50, oos: false },
  { sku: "ghrp-6-10mg", name: "GHRP-6 10mg", price: 73.50, oos: false },
  { sku: "hcg-5000-iu", name: "HCG 5000 IU", price: 148.50, oos: true },
  { sku: "igf-1-lr3-1mg", name: "IGF-1 LR3 1mg", price: 180.00, oos: false },
  { sku: "ipamorelin-10mg", name: "Ipamorelin 10mg", price: 120.00, oos: false },
  { sku: "ipamorelin-5mg", name: "Ipamorelin 5mg", price: 73.50, oos: true },
  { sku: "kisspeptin-10-5mg", name: "Kisspeptin-10 5mg", price: 119.95, oos: true },
  { sku: "melanotan-1-10mg", name: "Melanotan-1 10mg", price: 90.00, oos: true },
  { sku: "melanotan-2-10mg", name: "Melanotan-2 10mg", price: 75.00, oos: false },
  { sku: "mots-c-10mg", name: "MOTS-c 10mg", price: 127.50, oos: false },
  { sku: "pt-141-10mg", name: "PT-141 10mg", price: 88.50, oos: false },
  { sku: "semaglutide-10mg", name: "Semaglutide 10mg", price: 224.95, oos: true },     // GLP-1 listed, research-use only
  { sku: "retatrutide-10mg", name: "Retatrutide 10mg", price: 277.50, oos: false },   // GLP-1 listed, research-use only
];

export const PRODUCT_IMAGE = "/products/banner.png"; // reuse bottle render
export const RESEARCH_NOTE =
  "Products are sold for laboratory research use only. Not for human consumption or therapeutic use. No statements are evaluated by the TGA.";
