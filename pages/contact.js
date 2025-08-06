import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Rapid Recovery Peptides</title>
      </Head>

      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
        <a href="/checkout">Checkout</a>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          Have a question? Reach out to us at info@rapidrecoverypeptides.com.au
        </p>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Rapid Recovery Peptides. All rights reserved.
      </footer>
    </>
  );
}
