"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface navlinksType {
  id: string;
  title: string;
  link: string;
}

type Props = {
  title: string;
};

const DashboardNavbar = ({ title }: Props) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const leftLinks = [
    {
      id: "1",
      title: "Students",
      link: "/dashboard/students",
    },
    {
      id: "2",
      title: "Add Course",
      link: "/dashboard/add-courses",
    },
    {
      id: "3",
      title: "New Blog",
      link: "/dashboard/new-blog",
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-2 ">
        <Button className="md:hidden" onClick={() => setOpenSidebar(true)}>
          <ArrowRight />
        </Button>
        <h2 className="bigTitle">{title}</h2>
      </div>

      {/* sidebar */}
      {/* mobile navbar */}
      {openSidebar && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 250 }}
          transition={{ type: "spring", duration: 0.3 }}
          className="w-[250px] mt-[60px] h-[calc(100vh-60px)] fixed top-0 left-0 z-10 bg-background px-[20px] shadow-md border-r border-border"
        >
          {/* top */}
          <div className="h-[60px] flex items-center justify-between">
            <Link
              href="/dashboard"
              className="font-semibold"
              onClick={() => setOpenSidebar(false)}
            >
              Dashboard
            </Link>
            <Button onClick={() => setOpenSidebar(false)}>
              <X />
            </Button>
          </div>

          {/* bottom section */}
          <div className="flex flex-col gap-[30px] mt-[20px]">
            {leftLinks.map((item: navlinksType) => (
              <Link
                key={item.id}
                href={item.link}
                className="font-semibold"
                onClick={() => setOpenSidebar(false)}
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

export default DashboardNavbar;
