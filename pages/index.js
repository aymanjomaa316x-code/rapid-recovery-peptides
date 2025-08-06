import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rapid Recovery Peptides</title>
        <meta name="description" content="Accelerate your recovery with our premium peptides." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.png" alt="Rapid Recovery Logo" className={styles.logo} />
        <h1 className={styles.title}>Welcome to Rapid Recovery Peptides</h1>
        <p className={styles.description}>
          Scientifically formulated for faster healing and optimal performance.
        </p>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Rapid Recovery Peptides. All rights reserved.
      </footer>
    </>
  );
}
