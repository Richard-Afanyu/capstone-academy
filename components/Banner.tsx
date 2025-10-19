import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-60px)] md:h-[400px] flex  flex-col-reverse md:flex-row justify-between w-full gap-[40px] items-center">
      {/* left side */}
      <div className="w-full md:w-1/2 h-[1/3] md:h-[340px] flex flex-col gap-4 items-center md:items-start md:justify-center">
        <h2 className="bigTitle">
          Zero to Hero completely From The Comport Of Your Home
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ab sit
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ab sit
          omnis autem aut quaerat ut repellat fugit blanditiis at.
        </p>
        {/* action buttons */}
        <div className="flex gap-6 items-center">
          <button className="py-2 px-4 bg-blue-400 text-white font-semibold text-[18px]">
            <Link href="/sign-up">Get Started</Link>
          </button>
          <button className="py-2 px-4 border border-border text-foreground font-semibold text-[18px]">
            <Link href="/about">About us</Link>
          </button>
        </div>
      </div>

      <div className="w-full h-2/3 md:w-1/2 md:h-full">
        <div className="relative w-full h-full">
          <Image
            src="/hero.gif"
            alt="banner image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
