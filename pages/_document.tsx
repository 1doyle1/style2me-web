import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="theme-color" content="#0B0F1A" />
        <meta
          name="description"
          content="Style2Me — the AI stylist that finds the exact pieces you want and builds outfits you’ll actually wear."
        />
        <meta property="og:title" content="Style2Me — AI stylist app" />
        <meta
          property="og:description"
          content="Find the exact pieces you want. Build smarter outfits. Coming to iOS."
        />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased bg-gray-950 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
