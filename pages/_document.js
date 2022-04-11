import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link href="//db.onlinewebfonts.com/c/6228016f2b172c06410f3a2356d33f6c?family=Roobert-Regular" rel="stylesheet" type="text/css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument