import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "../components/linkButton";
import { DownloadButton } from "../components/downloadButton";
import { Player } from "video-react";
import "../node_modules/video-react/dist/video-react.css";

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const topScroll = () => {
    const topDiv = document.getElementById("topSection");
    if (topDiv) {
      topDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projectScroll = () => {
    const projectDiv = document.getElementById("projectSection");
    if (projectDiv) {
      projectDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  const blenderScroll = () => {
    const blenderDiv = document.getElementById("blenderSection");
    if (blenderDiv) {
      blenderDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  const socialsScroll = () => {
    const socialDiv = document.getElementById("socialsSection");
    if (socialDiv) {
      socialDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="items-center justify-center bg-white  text-black ">
      <Head>
        <title>Froyo</title>
        <link rel="icon" href="/z.png" />
        <meta name="description" content="zirpluu.ml" />
        <link rel="stylesheet" href="/css/video-react.css" />
      </Head>

      <main className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
        <header className="mx-5 sm:mx-10 sticky top-0 bg-transparent z-50">
          <nav className="backdrop-blur-sm font-roboto flex-row text-center sm:flex-row sm:text-left justify-between py-2 sm:items-center w-full rounded-b-xl border-b-2 border-black bg-transparent">
            <div className="flex items-center">
              <Image
                onClick={topScroll}
                className="rounded-full cursor-pointer"
                quality={1}
                width={50}
                height={50}
                src="/z.png"
                alt="Logo"
              />
              <div className="hidden sm:flex-grow sm:flex justify-center text-xl">
                <div className="font-bold flex items-center space-x-8">
                  <p
                    onClick={projectScroll}
                    className="hover:border-b-2 rounded-xl px-2 cursor-pointer"
                  >
                    projects
                  </p>
                  <p
                    onClick={blenderScroll}
                    className="hover:border-b-2 rounded-xl px-2 cursor-pointer"
                  >
                    blender
                  </p>
                  <p
                    onClick={socialsScroll}
                    className="hover:border-b-2 rounded-xl px-2 cursor-pointer"
                  >
                    games
                  </p>
                </div>
              </div>
              <div className="sm:hidden ml-auto">
                <button
                  type="button"
                  className="text-xl text-white hover:text-white focus:outline-none mr-3"
                  title="open menu"
                  onClick={handleMenuToggle}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 26"
                    stroke="black"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M1 4h18M7 14h12M11 24h8"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            {isMenuOpen && (
              <div className="mt-2 mx-10 py-2 px-3 rounded-b-xl shadow border-2 border-black absolute right-0 left-0 sm:hidden bg-white">
                <div className="flex flex-col items-center">
                  <a
                    className="block py-1 cursor-pointer "
                    onClick={projectScroll}
                  >
                    projects
                  </a>
                  <a
                    className="block py-1 cursor-pointer"
                    onClick={blenderScroll}
                  >
                    blender
                  </a>
                  <a
                    className="block py-1 cursor-pointer"
                    onClick={socialsScroll}
                  >
                    games
                  </a>
                </div>
              </div>
            )}
          </nav>
        </header>

        <div
          id="topSection"
          className="relative min-h-screen max-h-screen snap-always snap-center snap-mandatory"
        >
          <div className="text-center pt-20 mt-10">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mt-20">
              froyo
            </h1>
            <p className="leading-7 mt-2">A website</p>
          </div>
          <div className="text-center absolute place-items-bottom inset-x-0 bottom-16 sm:bottom-3 animate-bounce">
            <p className="mt-6"> look at this stuff </p>
            <p className="text-2xl font-bold">&#8681;</p>
          </div>
        </div>
        <div
          id="projectSection"
          className="min-h-screen snap-mandatory snap-start"
        >
          <h2 className="text-center grid min-h-full place-items-center px-6 pt-24 sm:pt-32 lg:px-8 text-3xl font-bold mb-1">
            Projects
          </h2>
          <div className="flex mx-10 sm:mx-20 gap-x-5 gap-y-5 md:gap-y-16 mt-10 max-h-screen overflow-x-auto snap-x snap-mandatory max-h-[60vh] min-h-[60vh] mb-5">
            <div className="border-2 border-black  p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <h4 className="italic font-mono">Unity + C# </h4>
              <h3 className="text-2xl font-sans font-bold">Spell Farewell</h3>
              <p className="font-mono pt-2">
                a game where a wizard forgets his spells
              </p>
              <div className="flex mb-5">
                <Link href="https://zirpluu.itch.io/reversemetroidvania">
                  <LinkButton />
                </Link>
              </div>
              <p className="font-mono">
                I made this game in a week for the{" "}
                <a className="underline" href="https://itch.io/jam/1-bit-jam-n2">1-BIT JAM #2</a>, I recommend muting it
              </p>
            </div>
            <div className="border-2 border-black p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <h4 className="italic font-mono">Python</h4>
              <h3 className="text-2xl font-sans font-bold">Word Generator</h3>
              <p className="font-mono pt-2">
                a python script which outputs random words
              </p>
              <div className="flex mb-5">
                <Link href="https://replit.com/@Zirpluu/Word-Generator/">
                  <LinkButton />
                </Link>
              </div>
              <p className="font-mono">
                I created this script to generate random words from a list of
                words{" "}
                <a
                  className="underline"
                  href="https://www.mit.edu/~ecprice/wordlist.10000"
                >
                  here
                </a>
              </p>
            </div>
            <div className="border-2 border-black p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <h4 className="italic font-mono">Python</h4>
              <h3 className="text-2xl font-sans font-bold">Login Page</h3>
              <p className="font-mono pt-2">a login page made in python</p>
              <div className="flex mb-5">
                <Link href="https://replit.com/@Zirpluu/Login">
                  <LinkButton />
                </Link>
              </div>
              <p className="font-mono">
                I made a login script which adds the username and password from
                the user to text files then recalls them when the user wants to
                log in
              </p>
            </div>
            <div className="border-2 border-black p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <h4 className="italic font-mono">Python</h4>
              <h3 className="text-2xl font-sans font-bold">
                Community Calculator
              </h3>
              <p className="font-mono pt-2">
                answers questions based on what it knows
              </p>
              <div className="flex mb-5">
                <Link href="https://replit.com/@Zirpluu/Input-Based-Calculator">
                  <LinkButton />
                </Link>
              </div>
              <p className="font-mono">
                It writes to a file the questions that the user inputs with the
                answers then recalls them later
              </p>
            </div>
          </div>
        </div>
        <div
          id="blenderSection"
          className="min-h-screen snap-always snap-start snap-mandatory"
        >
          <h2 className="text-center grid min-h-full place-items-center px-6 pt-24 sm:pt-32 lg:px-8 text-2xl font-bold">
            Blender
          </h2>

          <div className="flex mx-10 sm:mx-20 gap-x-5 gap-y-5 md:gap-y-16 mt-10 max-h-screen overflow-x-auto snap-x snap-mandatory max-h-[60vh] min-h-[60vh] mb-5">
            <div className="border-2 border-black rounded-2xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <div className="flex-grow">
                <div className="flex flex-shrink-0">
                  <Image
                    className="rounded-t-xl"
                    quality={20}
                    width={1920}
                    height={1080}
                    src="/Models/InoGuitar.png"
                    alt="Bridgets yoyo"
                  />
                </div>
              </div>
              <div className="px-2 mt-5">
                <h1 className="text-xl font-bold"> Ino&apos;s Guitar </h1>
                <p> From guilty gear strive, remade in a different style</p>
                <Link href="https://github.com/Zirpluu/blenderModels/blob/main/BridgetYoyo.blend">
                  <DownloadButton />
                </Link>
              </div>
            </div>
            <div className="border-2 border-black rounded-2xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <div className="flex-grow">
                <div className="flex flex-shrink-0">
                  <Image
                    className="rounded-t-xl"
                    quality={20}
                    width={1920}
                    height={1080}
                    src="/Models/BrisketYoyo.png"
                    alt="Bridgets yoyo"
                  />
                </div>
              </div>
              <div className="px-2 mt-5">
                <h1 className="text-xl font-bold"> Bridget&apos;s yoyo </h1>
                <p> From guilty gear strive </p>
                <Link href="https://github.com/Zirpluu/blenderModels/blob/main/BridgetYoyo.blend">
                  <DownloadButton />
                </Link>
              </div>
            </div>
            <div className="border-2 border-black rounded-2xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <div className="flex-grow">
                <div className="flex flex-shrink-0">
                  <Image
                    className="rounded-t-xl"
                    quality={20}
                    width={1920}
                    height={1080}
                    src="/Models/ElpheltGun.png"
                    alt="Elphelts Gun"
                  />
                </div>
              </div>
              <div className="px-2 mt-5">
                <h1 className="text-xl font-bold"> Elphelt&apos;s Gun </h1>
                <p> From guilty gear strive</p>
                <Link href="https://github.com/Zirpluu/blenderModels/blob/main/ElpheltGun.blend">
                  <DownloadButton />
                </Link>
              </div>
            </div>
            <div className="border-2 border-black rounded-2xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <div className="flex-grow">
                <div className="flex flex-shrink-0">
                  <Image
                    className="rounded-t-xl"
                    quality={20}
                    width={1920}
                    height={1080}
                    src="/Models/RamSword.png"
                    alt="Ramlethals sword"
                  />
                </div>
              </div>
              <div className="px-2 mt-5">
                <h1 className="text-xl font-bold"> Ramlethal&apos;s Sword </h1>
                <p> From guilty gear strive</p>
                <Link href="https://github.com/Zirpluu/blenderModels/blob/main/RamSword.blend">
                  <DownloadButton />
                </Link>
              </div>
            </div>
            <div className="border-2 border-black rounded-2xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <div className="flex-grow">
                <div className="flex flex-shrink-0">
                  <Image
                    className="rounded-t-xl"
                    quality={20}
                    width={1920}
                    height={1080}
                    src="/Models/Guitar.png"
                    alt="guitar"
                  />
                </div>
              </div>
              <div className="px-2 mt-5">
                <h1 className="text-xl font-bold"> I-no&apos;s Guitar </h1>
                <p> From guilty gear strive</p>
                <Link href="https://github.com/Zirpluu/blenderModels/blob/main/I-noGuitar.blend">
                  <DownloadButton />
                </Link>
              </div>
            </div>
            <div className="border-2 border-black rounded-2xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <div className="flex-grow">
                <div className="flex flex-shrink-0">
                  <Image
                    className="rounded-t-xl"
                    quality={20}
                    width={1920}
                    height={1080}
                    src="/Models/room.png"
                    alt="room"
                  />
                </div>
              </div>
              <div className="px-2 mt-5">
                <h1 className="text-xl font-bold"> Room </h1>
                <p> One of my earliest projects </p>
                <Link href="https://github.com/Zirpluu/blenderModels/blob/main/Room.blend">
                  <DownloadButton />
                </Link>
              </div>
            </div>
            <div className="border-2 border-black rounded-2xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <div className="flex-grow">
                <div className="flex flex-shrink-0">
                  <Image
                    className="rounded-t-xl"
                    quality={20}
                    width={1920}
                    height={1080}
                    src="/Models/donut.png"
                    alt="donut"
                  />
                </div>
              </div>
              <div className="px-2 mt-5">
                <h1 className="text-xl font-bold"> Donut </h1>
                <p> First thing I made in blender </p>
                <Link href="https://github.com/Zirpluu/blenderModels/blob/main/donut.blend">
                  <DownloadButton />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          id="socialsSection"
          className="min-h-screen max-h-screen snap-mandatory snap-start "
        >
          <h2 className="text-center grid min-h-full place-items-center px-6 pt-24 sm:pt-32 lg:px-8 text-2xl font-bold">
            games
          </h2>
          <div className="flex mx-10 sm:mt-16 sm:mx-20 gap-x-5 gap-y-5 md:gap-y-16 mt-10 max-h-screen overflow-x-auto snap-x snap-mandatory max-h-[60vh] min-h-[60vh] mb-5">
            <div className="border-2 border-black p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden overflow-x-hidden">
              <h4 className="italic font-mono">Guilty Gear Strive</h4>
              <h3 className="text-2xl font-sans font-bold p-b-2">Silly Potemkin Match</h3>
              <div className="p-t-2">
              <Player
                playsInline
                poster="/assets/poster.png"
                src="/potMatch.mp4"
                
              />
              </div>
            </div>
            
          </div>
        </div>
        <div className="py-10 bg-inherit"></div>
      </main>
    </div>
  );
};

export default Home;
