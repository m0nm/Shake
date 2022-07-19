import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Specialities from "../components/Specialities";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shake | The smoothiest milkshake in town</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Header />

      <Specialities />

      <AboutUs />
    </div>
  );
};

export default Home;
