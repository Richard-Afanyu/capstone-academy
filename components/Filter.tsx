"use client";

import React from "react";
import { Button } from "./ui/button";

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ filter, setFilter }: Props) => {
  const filterButtons = [
    {
      title: "All",
      slug: "all",
    },
    {
      title: "Web Development",
      slug: "web-dev",
    },
    {
      title: "Application Development",
      slug: "app-dev",
    },
    {
      title: "DevOps",
      slug: "devops",
    },
    {
      title: "Management",
      slug: "management",
    },
  ];
  return (
    <div className="flex mt-[20px] items-center gap-[20px] overflow-x-scroll scrollbar">
      {filterButtons.map((item) => (
        <Button
          onClick={() => setFilter(item.slug)}
          key={item.slug}
          variant={filter == item.slug ? "secondary" : "default"}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
