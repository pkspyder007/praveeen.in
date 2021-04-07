import Head from "next/head";
import Hero from "@components/sections/Hero";
import Technologies from "@components/sections/Technologies";
import Testimonials from "@components/sections/Testimonails";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Praveen Kumar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Testimonials />
      <Technologies />
    </div>
  );
}
