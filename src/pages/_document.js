import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://api.fontshare.com/v2/css?f[]=supreme@800,400,200,300,500,700&f[]=technor@300,600,400,700,500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
