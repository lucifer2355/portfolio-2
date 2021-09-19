import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html className='overflow-hidden h-full relative'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='overflow-auto relative'>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
