import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AboutUs from "../components/AboutUs";
import AuthModal from "../components/Auth/AuthModal";
import Header from "../components/Header";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import Specialities from "../components/Specialities";

const Home: NextPage = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  // const closeModal = () => setModal(false);

  return (
    <div>
      <Head>
        <title>Shake | The smoothiest milkshake in town</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {modal && <AuthModal />}

      <Navbar openModal={openModal} />

      <Header />

      <Specialities />

      <AboutUs />

      <Location />

      <footer className="bg-white h-12 font-semibold text-center mt-8">
        <a href="https://github.com/m0nm">
          Made with <span className="text-red-500">❤</span> by m0nm
        </a>
      </footer>
    </div>
  );
};

export default Home;
