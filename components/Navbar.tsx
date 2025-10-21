"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { motion } from "framer-motion";
import { ClerkLoaded, useUser } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export interface LinksType {
  title: string;
  link: string;
}

const Navbar = () => {
  const { user } = useUser();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const links = [
    {
      title: "Courses",
      link: "/courses",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="flex sticky top-0 items-center justify-between h-[60px] bg-background border-b border-border px-[20px] md:px-[40px] z-[9999]">
      <Button
        className="md:hidden"
        onClick={() => setOpenSidebar((prev) => !prev)}
      >
        <Menu />
      </Button>

      <Link href="/" className="hidden md:block font-bold text-xl">
        Capstone Academy.
      </Link>

      {/* middle links */}
      <div className="hidden md:block space-x-6">
        {links.map((item: LinksType) => (
          <Link href={item.link} key={item.link} className="font-semibold">
            {item.title}
          </Link>
        ))}
      </div>

      {/* right side */}
      <ClerkLoaded>
        <SignedOut>
          <div className="space-x-4">
            <Button>
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <ModeToggle />
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-6">
            <Link href="/profile" className="font-semibold">
              Profile
            </Link>
            <div className="flex items-center gap-1">
              <UserButton afterSignOutUrl="/" />
              <span className="text-muted-foreground text-[14px]">
                {user?.firstName}
              </span>
            </div>
            <ModeToggle />
          </div>
        </SignedIn>
      </ClerkLoaded>

      {/* mobile sidebar */}
      {openSidebar && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          transition={{ type: "spring", duration: 0.3 }}
          className="fixed top-0 left-0 z-20 bg-background h-[100vh] w-[300px] border-r border-sidebar pt-[20px] px-[20px]"
        >
          <div className="flex w-full justify-between">
            <Link
              href="/"
              onClick={() => setOpenSidebar(false)}
              className=" font-bold text-xl"
            >
              Capstone Academy.
            </Link>
            <Button onClick={() => setOpenSidebar(false)}>
              <X />
            </Button>
          </div>
          {/* middle links */}
          <div className="flex flex-col gap-4 mt-[20px]">
            {links.map((item: LinksType) => (
              <Link
                onClick={() => setOpenSidebar(false)}
                href={item.link}
                key={item.link}
                className="font-semibold"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
