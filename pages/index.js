import Head from "next/head";
import Hero from "@sections/Hero";
import Technologies from "@sections/Technologies";
import Testimonials from "@sections/Testimonails";

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
