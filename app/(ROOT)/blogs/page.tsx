import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAllBlogs } from "@/sanity/lib/actions/getFunctions";

type BlogType = {
  slug: { _type: string; current: string };
  title: string;
  description: string;
  bannerImage: string;
  blog: string;
  createdAt: string;
};

const BlogsPage = async () => {
  // const Blogs: BlogType[] = blogs;
  const Blogs: BlogType[] = await getAllBlogs();
  if (!Blogs) {
    return (
      <div>
        <h2>Sorry, could not fetch blogs at the moment</h2>
        <Link href="/">
          Please return to and check your internet connection
        </Link>
      </div>
    );
  }
  return (
    <div className="mt-[20px]">
      <h2 className="bigTitle">Our Blogs</h2>
      <p className="text-muted-foreground">
        Stay up-to-date with current technological trends with our masterfully
        written blogs. These are short and simple and yet very informative.
      </p>

      {/* display blogs section */}
      <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {Blogs.map((item) => (
          <div className="cardBase relative" key={item.slug.current}>
            {/* image section */}
            <div className="w-full h-[250px] relative">
              <Image
                src={item.bannerImage}
                alt="blog image"
                fill
                className="object-cover rounded-[5px]"
              />
            </div>

            {/* course info section */}
            <div className="mt-[20px] flex flex-col gap-4">
              <h2 className="bigTitle">{item.title}</h2>
              <p className="text-muted-foreground text-[14px] line-clamp-3">
                {item.description}
              </p>
            </div>

            {/* actions section */}
            <div className="mt-[20px] flex gap-6">
              <Button>
                <Link
                  href={`/blogs/${item.slug.current}`}
                  className="flex items-center gap-2"
                >
                  Details <ArrowRightCircle />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
