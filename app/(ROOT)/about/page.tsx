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
          <p className="text-muted-foreground text-[14px] py-2">{`Nothing to see here :D`}</p>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            veniam consequuntur soluta molestias inventore, delectus
            consequatur, iure nihil cum vero eligendi quaerat quo veritatis
            quibusdam ex. Animi incidunt laudantium, vitae cumque ipsam soluta
            quo doloribus ab perspiciatis perferendis maxime vero dignissimos
            nemo ad et qui? Minima et deserunt ab ratione?
          </p>
        </div>
        <div className="mt-[20px]">
          <h2 className="smallTitle">Our Mission</h2>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            exercitationem quae? Velit dolorum, quia molestiae excepturi amet
            quibusdam soluta ratione?
          </p>
        </div>
        <div className="mt-[20px]">
          <h2 className="smallTitle">Our Values</h2>
          <ul className="flex flex-col gap-[10px]">
            <li className="flex items-center gap-2">
              <Check />
              <span className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, officiis!
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <span className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, officiis!
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <span className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, officiis!
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
