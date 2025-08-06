import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Products() {
  return (
    <>
      <Head>
        <title>Products - Rapid Recovery Peptides</title>
      </Head>

      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
        <a href="/checkout">Checkout</a>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Our Products</h1>
        <p className={styles.description}>
          Explore our premium selection of recovery-enhancing peptides.
        </p>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Rapid Recovery Peptides. All rights reserved.
      </footer>
    </>
  );
}
