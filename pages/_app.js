import "../styles/globals.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/main.css";
import Head from "next/head";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Home | Praveen Kumar</title>
        <meta name="Description" content="" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
