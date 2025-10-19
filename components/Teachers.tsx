import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface TeachersType {
  id: string;
  teacherName: string;
  image: string;
  desc: string;
  rating: number;
}

const Teachers = () => {
  const teachers = [
    {
      id: "1",
      teacherName: "Richard Afanyu",
      image: "/teachers/friend1.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        dolore omnis quisquam aliquid maiores magnam ratione et doloribus nihil`,
      rating: 4,
    },
    {
      id: "2",
      teacherName: "Richard Afanyu",
      image: "/teachers/friend1.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        dolore omnis quisquam aliquid maiores magnam ratione et doloribus nihil`,
      rating: 4,
    },
    {
      id: "3",
      teacherName: "Richard Afanyu",
      image: "/teachers/friend1.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        dolore omnis quisquam aliquid maiores magnam ratione et doloribus nihil`,
      rating: 4,
    },
    {
      id: "4",
      teacherName: "Richard Afanyu",
      image: "/teachers/friend1.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        dolore omnis quisquam aliquid maiores magnam ratione et doloribus nihil`,
      rating: 4,
    },
  ];
  return (
    <div className="mt-[40px]">
      <h2 className="bigTitle">Our Elite Teaching Staff</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        dolore omnis quisquam aliquid maiores magnam ratione et doloribus nihil
        saepe repudiandae, inventore aut ea ab cum alias mollitia, eaque
        dignissimos.
      </p>

      {/* all teachers section */}
      <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
        {teachers.map((item: TeachersType) => (
          <div
            key={item.id}
            className="border border-border py-4 px-4 rounded-[5px] flex flex-col gap-2 items-center"
          >
            <Image
              src={item.image}
              alt="user image"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <h3 className="font-semibold">{item.teacherName}</h3>
            <p className="text-[14px] text-muted-foreground">{item.desc}</p>
            <Button variant={"secondary"}>{item.rating} star rated</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
