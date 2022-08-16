import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";

import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "./_app";

import {
  AboutUs,
  AuthModal,
  Avatar,
  Cart,
  ForgetPasswordForm,
  Header,
  Location,
  LoginForm,
  Navbar,
  Products,
  RegisterForm,
  SignInButton,
  Specialities,
} from "../components";

import avatar from "../public/asset/navbar/avatar/dog.png";

const Home: NextPage = () => {
  // auth form modal
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const [display, setDisplay] = useState<"login" | "register" | "forget">(
    "login"
  );

  const handleDisplay = (value: "login" | "register" | "forget") => {
    setDisplay(value);
  };

  // cart state
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = (value: boolean) => setShowCart(value);

  // auth user
  const user = useAuthUser(["user"], auth);

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

      <Navbar>
        {user.isLoading ? (
          <></>
        ) : user.data ? (
          <Avatar avatar={avatar} handleShowCart={handleShowCart} />
        ) : (
          <SignInButton openModal={openModal} handleDisplay={handleDisplay} />
        )}
      </Navbar>

      {showCart && <Cart showCart={showCart} handleShowCart={handleShowCart} />}

      <Header />

      <Specialities />

      <AboutUs />

      <Products />

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
