import { AppProps } from 'next/app';
import Head from 'next/head';

// BaseURL do tsconfig setado para "src"
import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  // <> = react fragment
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
