import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navigation } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <div className="flex min-h-screen flex-col items-center justify-center mx-5 text-white">
        <Head>
          <title>Zirpluu.ml</title>
          <link rel="icon" href="/z.png" />
        </Head>

        <Navigation />

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 mt-5 text-center">
          {/* <div className="flex border-b-2 border-x rounded-xl">
            <div className="p-2 ">
            <Image
            className="px-2"
            quality={20}
            width={1920/2}
            height={1080/2}
            src="/Donut.png"
            alt="Donut"
          />
            </div>
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default Home;
