import Head from "next/head";
import MyApp from "./_app";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NWN Group</title>
        <link rel="icon" href="/favicon.svg" />

        <link href="../asset/OpenSans/OpenSans-Regular.ttf" rel="stylesheet" />
        <link
          href="../asset/OpenSans/OpenSans-ExtraBold.ttf"
          rel="stylesheet"
        />
        <link href="../asset/WorkSans/WorkSans-Regular.ttf" rel="stylesheet" />
        <link
          href="../asset/WorkSans/WorkSans-ExtraBold.ttf"
          rel="stylesheet"
        />
        <link href="../pages/styles/normalize.css" rel="stylesheet" />
      </Head>

      {/* <p>I'm index.js</p> */}
    </div>
  );
}
