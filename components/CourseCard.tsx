import { CourseType } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Briefcase, Notebook } from "lucide-react";
import { ClerkLoaded } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

interface Props {
  item: CourseType;
}

const CourseCard = ({ item }: Props) => {
  return (
    <div className="cardBase relative">
      {/* image section */}
      <div className="w-full h-[250px] relative">
        <Image
          src={item.bannerImage}
          alt="course image"
          fill
          className="object-cover rounded-[5px]"
        />
      </div>

      {/* course info section */}
      <div className="mt-[20px] flex flex-col gap-4">
        <h2 className="bigTitle">{item.title}</h2>
        <p className="text-muted-foreground text-[14px] line-clamp-4">
          {item.description}
        </p>
        <p className="font-semibold">{item.instructor}</p>
        <div className="flex items-center gap-2">
          <Button disabled>{item.duration}</Button>
          <Button disabled>{item.rating} of 5 stars</Button>
          <Button disabled>{item.createdAt.slice(0, 10)}</Button>
        </div>
      </div>
      <Button className="absolute top-4 right-4" variant={"category"}>
        {item.category}
      </Button>

      {/* actions section */}
      <div className="mt-[20px] flex gap-6">
        <Button>
          <Link
            href={`/courses/details/${item.slug.current}`}
            className="flex items-center gap-2"
          >
            Details <Notebook />
          </Link>
        </Button>
        <ClerkLoaded>
          <SignedIn>
            <Button>
              <Link
                href={`/courses/${item.slug.current}`}
                className="flex items-center gap-2"
              >
                Enroll <Briefcase />
              </Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <Button>
              <Link href="sign-in">Sign in to enroll</Link>
            </Button>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default CourseCard;
