import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, Phone, X } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

function ContactPage() {
  return (
    <div className="w-full mt-[20px] h-[450px] md:h-[400px] gap-4 flex flex-col-reverse md:flex-row items-center justify-between">
      {/* left side */}
      <div className="md:flex-1 flex-1/3 text-center bg-card border border-border w-full py-4">
        <h2 className="font-bold text-2xl  ">Contact Us!</h2>
        <p className="mb-4 text-sm">
          Get in touch with through any of the following
        </p>
        <div className="flex justify-center text-center items-center">
          <ul className="flex flex-col gap-2 ">
            <li className="flex gap-2">
              <span className="font-semibold">Email</span> <Mail />:
              richardafanyu5@gmail.com
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">Phone</span> <Phone />:
              +237-650-95-11-30
            </li>
            <div className="flex gap-2 items-center">
              <span className="font-semibold">Send me a DM:</span>
              <div className=" flex gap-2 ">
                <Button className="">
                  <Link
                    href="https://web.facebook.com/profile.php?id=100079501246618"
                    target="_black"
                  >
                    <Facebook className="" />
                  </Link>
                </Button>
                <Button>
                  <Link
                    href="https://www.instagram.com/juiceyoung89/"
                    target="_black"
                  >
                    <Instagram className="" />
                  </Link>
                </Button>
                <Button>
                  <Link href="/" target="_black">
                    <X className="" />
                  </Link>
                </Button>
                <Button>
                  <Link
                    href="https://www.linkedin.com/in/richard-afanyu-9b2069324/"
                    target="_black"
                  >
                    <Linkedin className="" />
                  </Link>
                </Button>
              </div>
            </div>
          </ul>
        </div>
      </div>

      {/* right side */}
      <div className="relative h-full w-full flex-2/3 md:flex-1">
        <Image
          src="/contact.png"
          alt="contact image"
          loading="eager"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default ContactPage;
