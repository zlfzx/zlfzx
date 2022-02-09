// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
          
          <meta name="description" content="I'm Muhammad Zulfi Izzulhaq, Backend Developer from Pekalongan, Indonesia" />
          <meta name="keywords" content="developer,engineer,software,backend,frontend,laravel,react,vue" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Muhammad Zulfi Izzulhaq" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zlfzx.xyz/" />
          <meta property="og:title" content="Muhammad Zulfi Izzulhaq" />
          <meta property="og:description" content="I'm Muhammad Zulfi Izzulhaq, Backend Developer from Pekalongan, Indonesia" />
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