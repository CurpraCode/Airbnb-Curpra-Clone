import Head from "next/head";
import Header from "../components/Header";
import Background from "../components/Background";
import Explore from "../components/Explore";
import CarouselLargeCard from "../components/CarouselLargeCard";
import Banner from "../components/Banner";
import CarouselCardTwo from "../components/CarouselCardTwo";
import Host from "../components/Host";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb-Clone</title>
        <meta
          name="description"
          content="Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Background />
      <Explore />
      <CarouselLargeCard />
      <Banner/>
      <CarouselCardTwo/>
      <Host/>
<Footer/>
      
    </div>
  );
}
