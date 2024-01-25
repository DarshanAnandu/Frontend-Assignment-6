import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import "./needed.css";
import "./extra.css";
import Nav from '../components/Nav3'
// import Dummy from '../components/dummy'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HeyGen - AI Video Generator",
  description: "HeyGen is an innovative video platform that harnesses the power of generative AI to streamline your video creation process. Unleash your creativity with HeyGen - the future of video production.",
  icons: {
    icon: "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e5393fe9c5382e523aca1_32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="iSRWTJT2JIeY-yTjw-7ud527jnkHmEzSoL16bUmRK54" /> */}

        {/* Open Graph and Twitter meta tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/css/heygen.webflow.f44a68fcf.min.css" />

        {/* Favicon and Apple Touch Icon */}
        <link rel="shortcut icon" href="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e5393fe9c5382e523aca1_32x32.png" />
        <link rel="apple-touch-icon" href="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e53973f5e6f2180b10c04_256x256.png" />

        {/* WebFont Loader Script */}
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript" />

        {/* Custom Script for touch device detection */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(o, c) {
                var n = c.documentElement
                  , t = " w-mod-";
                n.className += t + "js",
                ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
              }(window, document);
            `,
          }}
        /> */}

      </Head>
      <body className={`${inter.className} heygen_body`}>
        <Nav />
        {/* <Dummy /> */}
        {children}
      </body>
    </>
  );
}


// icons: {
//   icon: 'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e5393fe9c5382e523aca1_32x32.png',
// },