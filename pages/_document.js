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
          
          <meta name="title" content="Muhammad Zulfi Izzulhaq" />
          <meta name="description" content="Experienced as a Laravel Backend Developer for 3 years and interested in web development using PHP and Javascript" />
          <meta name="keywords" content="developer,engineer,software,backend,frontend,laravel,react,vue" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Muhammad Zulfi Izzulhaq" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zlfzx.xyz/" />
          <meta property="og:title" content="Muhammad Zulfi Izzulhaq" />
          <meta property="og:description" content="Experienced as a Laravel Backend Developer for 3 years and interested in web development using PHP and Javascript" />
          <meta property="og:image" content="/og.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://zlfzx.xyz/" />
          <meta property="twitter:title" content="Muhammad Zulfi Izzulhaq" />
          <meta property="twitter:description" content="Experienced as a Laravel Backend Developer for 3 years and interested in web development using PHP and Javascript" />
          <meta property="twitter:image" content="/og.png" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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