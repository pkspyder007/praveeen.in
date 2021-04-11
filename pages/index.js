import Head from "next/head";
import Hero from "@components/sections/Hero";
import Technologies from "@components/sections/Technologies";
import Testimonials from "@components/sections/Testimonails";
import Clients from "@components/sections/Clients";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Praveen Kumar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Clients />
      <Testimonials />
      <Technologies />
    </div>
  );
}
