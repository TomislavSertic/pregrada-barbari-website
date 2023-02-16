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
      </Head>
      <main>
        <UnderConstruction />
      </main>
    </>
  );
}
