import { UnderConstruction } from "@/components/utils/UnderConstruction";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pregrada Barbari</title>
        <meta name="description" content="Košarkaški klub Pregrada Barbari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main>
        <UnderConstruction />
      </main>
    </>
  );
}
