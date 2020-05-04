import "../styles/styles.scss";
import Head from "next/head";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import About from "./components/About";
import Mission from "./components/Mission";
import Support from "./components/Support";
import Contact from "./components/Contact";

export default function Index() {
  return (
    <Layout>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="static/img/logo-hope-small-min.png"
          alt="H.O.P.E. Foundation"
        ></link>
        <title>H.O.P.E. Foundation</title>
        <meta
          name="description"
          content="H.O.P.E. foundation is a foundation that works for dialysis patients mainly in Ghana."
        />
        <meta
          name="keywords"
          content="Enock Osei, H.O.P.E. Foundation, Dialysis in Ghana,"
        />
        <meta name="author" content="Brian Bawuah" />
        <meta name="copyright" content="H.O.P.E. Foundation" />
      </Head>
      <Landing />
      <Mission />
      <About />
      <Support />
      <Contact />
    </Layout>
  );
}
