import '@/styles/globals.css'
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
