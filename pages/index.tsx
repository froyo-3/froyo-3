import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navigation } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen items-center justify-center text-white scroll-smooth bg-black">
      <Head>
        <title>Zirpluu.ml</title>
        <link rel="icon" href="/z.png" />
        <meta name="description" content="zirpluu.ml" />
      </Head>

      <main className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
        <header className="mx-5 sm:mx-10 sticky top-0 bg-transparent z-50">
          <Navigation />
        </header>
        <div className="relative bg-black min-h-screen max-h-screen snap-always snap-center snap-mandatory">
          <div className="text-center place-content-center pt-20 mt-10">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mt-20">
              zirpluu.ml
            </h1>
            <p className="text-base leading-7 text-gray-100 mt-2">
              A new project
            </p>
          </div>
          <div className="text-center absolute place-items-bottom inset-x-0 bottom-16 sm:bottom-3 animate-bounce">
            <p className="mt-6">scroll down</p>
            <p className="text-2xl font-bold">&#8681;</p>
          </div>
        </div>




        <div className="bg-teal-500 min-h-screen snap-mandatory snap-start">
          <h2 className="text-center grid min-h-full place-items-center px-6 pt-24 sm:pt-32 lg:px-8 text-3xl font-bold">
            Projects
          </h2>
            <div className="flex mx-10 sm:mx-20 gap-x-5 gap-y-5 md:gap-y-16 mt-10 max-h-screen overflow-x-auto snap-x snap-mandatory max-h-[50vh] min-h-[50vh]">
              <div className="border-b-2 border-x p-5 rounded-xl flex-shrink-0 snap-center max-w-[40vh] min-w-[40vh]">
                <h4 className="italic font-mono">reactJS</h4>
                <h3 className="text-2xl font-sans font-bold">emiltye.ml</h3>
                <p className="font-mono py-2"> the website I used to first learn react</p>
                <p className="font-mono">Emiltye.ml was the website I used to learn React, offering a user-friendly interface and comprehensive tutorials. It provided clear explanations and practical examples for understanding component composition, state management, and event handling. Thanks to this resource, I gained the confidence and skills to develop complex React applications.</p>
              </div>

              <div className="border-b-2 border-x p-5 rounded-xl flex-shrink-0 snap-center max-w-[40vh] min-w-[40vh]">
                <h4 className="italic font-mono">Python</h4>
                <h3 className="text-2xl font-sans font-bold">Word Generator</h3>
                <p className="font-mono py-2"> a python script which outputs random words </p>
                <p className="font-mono">
I developed a Python word generator program that efficiently generates unique and creative words based on specified parameters. Its customizable features, including word length, syllable patterns, and letter combinations, make it a versatile tool for naming characters, inventing product names, and inspiring creative writing.</p>
              </div>

              <div className="border-b-2 border-x p-5 rounded-xl flex-shrink-0 snap-center max-w-[40vh] min-w-[40vh]">
                <h4 className="italic font-mono">Python</h4>
                <h3 className="text-2xl font-sans font-bold">Login Page</h3>
                <p className="font-mono">a login page made in python</p>
              </div>

              <div className="border-b-2 border-x p-5 rounded-xl flex-shrink-0 snap-center max-w-[40vh] min-w-[40vh]">
                <h4 className="italic font-mono">Python</h4>
                <h3 className="text-2xl font-sans font-bold">Community Calculator</h3>
                <p className="font-mono">answers questions based on what it knows</p>
              </div>

              <div className="border-b-2 border-x p-5 rounded-xl flex-shrink-0 snap-center max-w-[40vh] min-w-[40vh]">
                <h4 className="italic font-mono">Python</h4>
                <h3 className="text-2xl font-sans font-bold">Project</h3>
                <p className="font-mono">Lorem ipsum dolor sit amet.</p>
              </div>

              <div className="border-b-2 border-x p-5 rounded-xl flex-shrink-0 snap-center max-w-[40vh] min-w-[40vh]">
                <h4 className="italic font-mono">Python</h4>
                <h3 className="text-2xl font-sans font-bold">Project</h3>
                <p className="font-mono">Eos soluta maiores est commodi odio aut placeat ratione.</p>
              </div>
          </div>
        </div>





        <div className="bg-emerald-500 min-h-screen snap-always snap-start snap-mandatory">
          <h2 className="text-center grid min-h-full place-items-center px-6 pt-24 sm:pt-32 lg:px-8 text-2xl font-bold">
            3D Models
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 px-6 mt-5">
            <div className="relative w-full h-0 pb-2/3">
              <Image
                className="rounded-xl"
                quality={20}
                width={1920}
                height={1080}
                src="/donut.png"
                alt="donut"
              />
            </div>
            <div className="relative w-full h-0 pb-2/3">
              <Image
                className="rounded-xl"
                quality={20}
                width={1920}
                height={1080}
                src="/donut.png"
                alt="donut"
              />
            </div>
            <div className="relative w-full h-0 pb-2/3">
              <Image
                className="rounded-xl"
                quality={20}
                width={1920}
                height={1080}
                src="/donut.png"
                alt="donut"
              />
            </div>
          </div>
        </div>





        <div className="bg-orange-500 min-h-screen max-h-screen snap-mandatory snap-start">
          <div className="text-center grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            Link page
          </div>
        </div>
        <div className="py-10 bg-orange-500"></div>
      </main >
    </div >
  );
};

export default Home;
