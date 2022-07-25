import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import {
  AboutUs,
  AuthModal,
  ForgetPasswordForm,
  Header,
  Location,
  LoginForm,
  Navbar,
  RegisterForm,
  Specialities,
} from "../components";

const Home: NextPage = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const [display, setDisplay] = useState<"login" | "register" | "forget">(
    "login"
  );

  const handleDisplay = (value: "login" | "register" | "forget") => {
    setDisplay(value);
  };

  return (
    <div className="w-full overflow-x-clip">
      <Head>
        <title>Shake | The smoothiest milkshake in town</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {modal && (
        <AuthModal>
          {display === "login" ? (
            <LoginForm closeModal={closeModal} handleDisplay={handleDisplay} />
          ) : display === "register" ? (
            <RegisterForm
              closeModal={closeModal}
              handleDisplay={handleDisplay}
            />
          ) : (
            <ForgetPasswordForm handleDisplay={handleDisplay} />
          )}
        </AuthModal>
      )}

      <Navbar openModal={openModal} handleDisplay={handleDisplay} />

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
