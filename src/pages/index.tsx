import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { Button } from '../components/ui/button/button.component';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button onClick={(_) => router.push('/products')}>View Products</Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
