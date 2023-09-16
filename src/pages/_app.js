import Head from 'next/head';

import PrintProvider from '../providers/Print';

import '../styles/globals.css';
import '../styles/markdown.css';
import '../styles/page.scss';

import '../styles/app.scss';

function NoSsr({ children }) {
  const SERVER_RENDERED = typeof navigator === 'undefined';

  if (SERVER_RENDERED) {
    return null;
  }

  return <>{children}</>;
}

function MyApp({ Component, pageProps }) {
  return (
    <NoSsr>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <PrintProvider>
        <Component {...pageProps} />
      </PrintProvider>
    </NoSsr>
  );
}

export default MyApp;
