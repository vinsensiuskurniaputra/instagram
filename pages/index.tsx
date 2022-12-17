import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}

      {/* Modal */}
    </div>
  );
};

export default Home;
