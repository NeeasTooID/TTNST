import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <meta name="description" content="Download tiktok video, image or sound with no watermark and no ads" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
