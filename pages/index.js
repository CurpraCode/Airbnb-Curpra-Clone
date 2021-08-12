import Head from "next/head";
import Header from "../components/Header";
import Background from "../components/Background";
import Explore from "../components/Explore";
import CarouselLargeCard from "../components/CarouselLargeCard";
import Banner from "../components/Banner";
import CarouselCardTwo from "../components/CarouselCardTwo";
import Host from "../components/Host";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb-Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Background />
      <Explore />
      <CarouselLargeCard />
      <Banner/>
      <CarouselCardTwo/>
      <Host/>

      
    </div>
  );
}
