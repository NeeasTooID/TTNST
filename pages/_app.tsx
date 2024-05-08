import { MantineProvider } from '@mantine/core';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from "next/font/google";
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ['500', '400', '900'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Snaptik NST</title>
        <link rel="icon" type="image/png" href="/icons/favicon.png" />
      </Head>
      <MantineProvider
        theme={{
          fontFamily: poppins.style.fontFamily,
          colorScheme: 'dark',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Analytics/>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
