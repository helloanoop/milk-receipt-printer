import Head from 'next/head';

import PrintProvider from '../providers/Print';

import '../styles/globals.css';
import '../styles/markdown.css';
import '../styles/page.scss';

import '../styles/app.scss';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <PrintProvider>
        <Component {...pageProps} />
      </PrintProvider>
    </>
  );
}

export default MyApp;
