import Head from "next/head";
import Header from "../components/Header";
import Background from "../components/Background";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb-Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Background/>
    </div>
  );
}
