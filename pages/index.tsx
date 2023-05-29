import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navigation } from "../components/navbar";

const Home: NextPage = () => {
  const [showSecondNavbar, setShowSecondNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const emeraldSection = document.getElementById("emerald-section");
      if (emeraldSection) {
        const { top } = emeraldSection.getBoundingClientRect();
        setShowSecondNavbar(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen items-center justify-center text-white scroll-smooth">
      <Head>
        <title>Zirpluu.ml</title>
        <link rel="icon" href="/z.png" />
        <meta name="description" content="zirpluu.ml" />
      </Head>

      <main>
        
        <div className="bg-black min-h-screen max-h-screen">
          <div className="mx-10 top-0 bg-inherit z-50">
            <Navigation />
          </div>

          <div className="text-center place-content-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mt-20">
              zirpluu.ml
            </h1>
            <p className="text-base leading-7 text-gray-100 mt-2">
              A new project
            </p>
          </div>
          <div className="text-center absolute place-items-bottom inset-x-0 bottom-3">
            <p className="mt-6"> scroll down </p>
            <p className="text-2xl font-bold">&#8681;</p>
          </div>
        </div>


        <div className=""></div>
        <div className={`mx-10 sticky top-0 bg-inherit z-50 ${showSecondNavbar ? "" : "hidden"}`}>
            <Navigation />
          </div>
        <div id="emerald-section" className="bg-emerald-500 min-h-screen max-h-screen">
          <div className="text-center grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            Something
          </div>
        </div>
        
        <div className="bg-blue-500 min-h-screen max-h-screen">
          <div className="text-center grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            Something else
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
