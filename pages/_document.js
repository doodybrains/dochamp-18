import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='http://www.cnap.graphismeenfrance.fr/infini/css/infini-fontes.css' />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
