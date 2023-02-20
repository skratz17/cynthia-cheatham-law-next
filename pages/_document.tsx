import { Html, Head, Main, NextScript } from 'next/document'

import { Footer } from '@/components/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="description" content="Cynthia Cheatham Law is dedicated to providing clients with exceptional service and utmost care in all family law matters, including child custody, divorce, and more." key="description" />
        <meta name="keywords" content="lawyer,law,attorney,family law,child custody,divorce,probate,parental rights,adoption,nashville,tennessee" key="keywords" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" key="httpequiv" />
        <meta name="google-site-verification" content="H0hwFlAo3RC9dl52AslDA1gplisBiuklsGTzInMT_gE" key="googleverification" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" key="favicon" />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" key="fonts" />
      </Head>
      <body>
        <Main />
        <Footer />
        <NextScript />
      </body>
      {/* <!-- Font Awesome --> */}
      <script src="https://kit.fontawesome.com/a292ce8ab6.js" crossOrigin="anonymous" async></script>

      {/* <!-- Scroll Listener --> */}
      <script src="js/scrollListener.js" async></script>

      {/* <!-- Mobile Detect --> */}
      <script src="js/mobileDetect.js" async></script>
    </Html>
  )
}
