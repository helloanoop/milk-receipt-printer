import Head from 'next/head';
import Receipt from 'components/Receipt';

export default function Index() {
  return (
    <>
      <Head>
        <title>Milk Receipt Printer</title>
        <meta name="Milk Receipt Printer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page page-home">
        <Receipt />
      </main>

      <footer>
      </footer>
    </>
  );
};
