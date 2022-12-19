import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header, Feed, UploadModal } from "../components";
const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
      <UploadModal />
    </div>
  );
};

export default Home;
