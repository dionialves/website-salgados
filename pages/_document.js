import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head />
        <body className="teste">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument