"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800">
              Hello, I'm {" "}
              <br />
              {
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Bruno !",
                    2500, // wait 1s before replacing "Mice" with "Hamsters"
                    "Web Developer",
                    2500,
                    "Mobile Developer",
                    2500,
                    "UI/UX Designer",
                    2500,
                  ]}
                  wrapper="span"
                  speed={300}
                  repeat={Infinity}
                />
              }
            </span>
          </h1>

          <p className="text-[#969c96] text-base sm:text-lg mb-6 lg:text-xl">
            Teste asofdiasjdfodias dspsufapsdf sdfoksadflka iufjdosjfosidjf
            dfjsodf fdoijapsdifjadsf dsfoidjasf
          </p>

          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-green-500 via-green-400 to-black hover:bg-slate-200 text-white mb-3 w-full sm:w-fit">
              Hire me
            </button>

            <button className="px-6 py-3 rounded-full bg-gradient-to-br  border border-white w-full sm:w-fit">
              Download CV
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/img/memoji.png"
              alt="Memoji"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
