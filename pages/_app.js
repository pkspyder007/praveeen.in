import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/globals.css";
import "../styles/main.css";
import Head from "next/head";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Home | Praveen Kumar</title>
        <meta
          name="Description"
          content="Force is the biggest coding club of IIIT Una lead by a group of phenomenal devs helping others to learn and grow in field of computer science."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
