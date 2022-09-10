import Head from 'next/head';
import Report from 'pageComponents/Report';

export default function ReportPage() {
  return (
    <>
      <Head>
        <title>Milk Receipt Printer</title>
        <meta name="Milk Receipt Printer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page page-list">
        <Report />
      </main>

      <footer>
      </footer>
    </>
  );
};
