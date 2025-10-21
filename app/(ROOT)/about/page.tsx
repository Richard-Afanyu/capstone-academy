import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mt-[20px] flex flex-col lg:flex-row gap-[40px] items-center min-h-[calc(100vh-60px)]">
      {/* left side */}
      <div className="relative w-full md:w-1/2 h-[350px] bg-accent">
        <Image
          src="/logo.png"
          alt="logo image"
          fill
          className="object-contain"
        />
      </div>

      {/* right sie */}
      <div className="w-full">
        <div>
          <h2 className="bigTitle">Capstone Academy</h2>
          <p className="text-[14px]">
            Capstone academy is a free learning platform built by Richard Afanyu
            for the purpose of providing free structured online learning for
            those seeking to learn skills in the world of technology. This site
            is built with love and passion for learning and progress.
          </p>
        </div>
        <div className="mt-[20px]">
          <h2 className="smallTitle">Our Mission</h2>
          <p className="para">
            Our mission is to provide free learning to all those seeking to
            learn skills in the field of technology from the comfort of their
            home while eliminating the destractions other platforms allow.
          </p>
        </div>
        <div className="mt-[20px]">
          <h2 className="smallTitle">Our Values</h2>
          <ul className="flex flex-col gap-[10px]">
            <li className="flex items-center gap-2">
              <Check />
              <span className="para">We cherish promote online learning.</span>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <span className="para">
                This platform will be free and continue to be free as we believe
                everyone should have access to information.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <span className="para">
                No personal information will be disclosed to third party
                applications as security is held at high regard with us.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
