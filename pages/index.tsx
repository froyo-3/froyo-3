import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../components/navbar";
import { LinkIcon } from "../components/LinkIcon";

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
          <div className="text-center pt-20 mt-10">
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

        <div className="bg-gradient-to-b from-black to-emerald-500 min-h-screen snap-mandatory snap-start">
          <h2 className="text-center grid min-h-full place-items-center px-6 pt-24 sm:pt-32 lg:px-8 text-3xl font-bold mb-1">
            Projects
          </h2>
          <div className="flex mx-10 sm:mx-20 gap-x-5 gap-y-5 md:gap-y-16 mt-10 max-h-screen overflow-x-auto snap-x snap-mandatory max-h-[60vh] min-h-[60vh] mb-5">
            <div className="border-b-2 border-x p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <h4 className="italic font-mono">reactJS</h4>
              <h3 className="text-2xl font-sans font-bold">emiltye.ml</h3>
              <p className="font-mono pt-2">
                the website I used to first learn react
              </p>
              <div className="flex mb-5">
                <Link href="https://emiltye.ml">
                  <button className="border rounded-xl mt-5">
                    <p className="py-3 px-3 text-xl">
                      visit here <LinkIcon />
                    </p>
                  </button>
                </Link>
              </div>
              <p className="font-mono">
                Emiltye.ml was a valuable website for me to learn React. It
                provided me with the necessary resources and guidance to enhance
                my skills and tackle complex React application development.
                Thanks to Emiltye.ml, I gained the confidence and knowledge
                required to build advanced React applications successfully.
              </p>
            </div>

            <div className="border-b-2 border-x p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto">
              <h4 className="italic font-mono">Python</h4>
              <h3 className="text-2xl font-sans font-bold">Word Generator</h3>
              <p className="font-mono pt-2">
                a python script which outputs random words
              </p>
              <div className="flex mb-5">
                <Link href="https://replit.com/@Zirpluu/Word-Generator/">
                  <button className="border rounded-xl mt-5">
                    <p className="py-3 px-3 text-xl">
                      visit here <LinkIcon />
                    </p>
                  </button>
                </Link>
              </div>
              <p className="font-mono">
                I created a Python word generator program that efficiently
                produces distinct and imaginative words. It serves as a
                versatile tool for character naming, inventing product names,
                and sparking creativity in writing endeavors.
              </p>
            </div>

            <div className="border-b-2 border-x p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto">
              <h4 className="italic font-mono">Python</h4>
              <h3 className="text-2xl font-sans font-bold">Login Page</h3>
              <p className="font-mono pt-2">a login page made in python</p>
              <div className="flex mb-5">
                <Link href="https://replit.com/@Zirpluu/Login">
                  <button className="border rounded-xl mt-5">
                    <p className="py-3 px-3 text-xl">
                      visit here <LinkIcon />
                    </p>
                  </button>
                </Link>
              </div>
              <p className="font-mono">
                I created a Python-based login page. Through a user-friendly
                interface, this login page prompts users to input their username
                and password securely. The login page then verifies the entered
                information against the stored credentials, granting access only
                to authorized users.
              </p>
            </div>

            <div className="border-b-2 border-x p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto">
              <h4 className="italic font-mono">Python</h4>
              <h3 className="text-2xl font-sans font-bold">
                Community Calculator
              </h3>
              <p className="font-mono pt-2">
                answers questions based on what it knows
              </p>
              <div className="flex mb-5">
                <Link href="https://replit.com/@Zirpluu/Input-Based-Calculator">
                  <button className="border rounded-xl mt-5">
                    <p className="py-3 px-3 text-xl">
                      visit here <LinkIcon />
                    </p>
                  </button>
                </Link>
              </div>
              <p className="font-mono">
                I created an advanced calculator in Python that can do more than
                basic arithmetic. It can remember previous answers and use them
                in new calculations. This feature allows users to reference and
                use the results of previous equations, making it easier and
                faster to perform complex mathematical operations.
              </p>
            </div>

            <div className="border-b-2 border-x p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto">
              <h4 className="italic font-mono">Language</h4>
              <h3 className="text-2xl font-sans font-bold">Project</h3>
              <div className="flex mb-3">
                <Link href="#">
                  <button className="border rounded-xl mt-5">
                    <p className="py-3 px-3 text-xl">
                      visit here <LinkIcon />
                    </p>
                  </button>
                </Link>
              </div>
              <p className="font-mono">
                Lorem ipsum dolor sit amet. In nemo odio nam minima eveniet eum
                voluptas illum et quos nemo aut iusto esse At omnis dolorem aut
                earum architecto! Non quae itaque ut nulla quam ut cumque sunt.
                Ea sint aperiam 33 similique fugit qui laboriosam iure qui
                itaque consequatur cum consequatur quod est molestiae
                consequuntur. Et cumque dolorem et ipsam dolore et atque
                voluptas.
              </p>
            </div>

            <div className="border-b-2 border-x p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto">
              <h4 className="italic font-mono">Language</h4>
              <h3 className="text-2xl font-sans font-bold">Project</h3>
              <div className="flex mb-3">
                <Link href="#">
                  <button className="border rounded-xl mt-5">
                    <p className="py-3 px-3 text-xl">
                      visit here <LinkIcon />
                    </p>
                  </button>
                </Link>
              </div>
              <p className="font-mono">
                Lorem ipsum dolor sit amet. Aut consequatur assumenda ad quia
                eaque non omnis repellat ut veritatis autem. Et inventore fugit
                aut voluptatem recusandae sit rerum perferendis non enim
                mollitia ut excepturi quia. Aut quia quidem eum nulla provident
                non consequatur autem et molestiae veniam sit saepe atque sed
                blanditiis mollitia. Ut molestias magni qui alias natus qui
                alias veritatis nam temporibus culpa ut modi velit!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-500 min-h-screen snap-always snap-start snap-mandatory">
          <h2 className="text-center grid min-h-full place-items-center px-6 pt-24 sm:pt-32 lg:px-8 text-2xl font-bold">
            3D Models
          </h2>
          <div className="flex mx-10 sm:mx-20 gap-x-5 gap-y-5 md:gap-y-16 mt-10 max-h-screen overflow-x-auto snap-x snap-mandatory max-h-[60vh] min-h-[60vh] mb-5">
            <div className="border-b border-x rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto">
              <div className="flex-grow">
                <div className="flex flex-shrink-0">
                  <Image
                    className="rounded-t-xl"
                    quality={20}
                    width={1920}
                    height={1080}
                    src="/donut.png"
                    alt="donut"
                  />
                </div>
              </div>
              <div className="pl-2 mt-5">
                <h1 className="text-xl font-bold"> Donut </h1>
                <p> Made in blender</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-500 min-h-screen max-h-screen snap-mandatory snap-start ">
          <h2 className="text-center grid min-h-full place-items-center px-6 pt-24 sm:pt-32 lg:px-8 text-2xl font-bold">
            Links
          </h2>
          <div className="flex mx-10 sm:mt-16 sm:mx-20 gap-x-5 gap-y-5 md:gap-y-16 mt-10 max-h-screen overflow-x-auto snap-x snap-mandatory max-h-[60vh] min-h-[60vh] mb-5">
            <div className="border-b-2 border-x p-2 rounded-xl flex-shrink-0 snap-center w-4/5 md:w-full xl:max-w-[60vh] xl:min-w-[70vh] mb-5 overflow-y-auto overflow-x-hidden">
              <h4 className="italic font-mono">Social</h4>
              <h3 className="text-2xl font-sans font-bold">Discord</h3>
              <p className="font-mono pt-2">The Community Discord</p>
              <div className="flex inline pb-5">
                <Link href="https://discord.gg/U4SrKQPs8G">
                  <button className="border rounded-xl mt-5">
                    <p className="py-3 px-3 text-xl">
                      visit here <LinkIcon />
                    </p>
                  </button>
                </Link>
              </div>
              <p className="font-mono">
                Zirpluu.ml is a vibrant and inclusive community Discord server
                that brings together individuals passionate about code and
                games. It serves as a virtual hub for enthusiastic developers,
                gamers, and tech enthusiasts to engage in meaningful
                discussions, exchange knowledge, and foster a supportive
                environment. Whether you&apos;re seeking assistance with coding
                challenges, sharing your latest gaming achievements, or simply
                looking for like-minded individuals to connect with, Zirpluu.ml
                offers a welcoming space for all. With its diverse range of
                channels dedicated to specific programming languages, game
                genres, and tech-related topics, members can easily find their
                niche and contribute to the collective growth and enjoyment of
                the community. Join Zirpluu.ml today and embark on an exciting
                journey of learning, collaboration, and camaraderie.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 bg-inherit"></div>
      </main>
    </div>
  );
};

export default Home;
