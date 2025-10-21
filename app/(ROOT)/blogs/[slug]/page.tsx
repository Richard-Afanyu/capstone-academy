import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBlogsBySlug } from "@/sanity/lib/actions/getFunctions";
import { md } from "@/lib/markdown";

type BlogType = {
  slug: { _type: string; current: string };
  title: string;
  description: string;
  bannerImage: string;
  blog: string;
  createdAt: string;
};

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const actual: BlogType = await getBlogsBySlug(slug);
  // const md = markdownit();
  const parsedContent = md.render(actual.blog || "");

  if (!actual) {
    return (
      <div>
        <h2>Blog not found!</h2>
        <Link href="/blogs">Return to blogs</Link>
      </div>
    );
  }
  return (
    <div className="mt-[20px] relative">
      {/* top image section */}
      <div className="relative w-full h-[300px]">
        <Image
          src={actual?.bannerImage}
          alt="course image"
          fill
          className="object-cover"
        />
      </div>

      {/* course info section */}
      <div className="mt-[20px] flex flex-col gap-[20px]">
        <h2 className="bigTitle">{actual?.title}</h2>
        <p className="text-muted-foreground">
          Description: {actual?.description}
        </p>
        {/* <p className="mt-[20px]">{actual.blog}</p> */}
        <div
          dangerouslySetInnerHTML={{ __html: parsedContent }}
          className="prose prose-lg max-w-none"
        />
      </div>

      <div className="mt-[20px] flex justify-end">
        <Button>
          <Link href="/blogs">Go back</Link>
        </Button>
      </div>
    </div>
  );
};

export default SingleBlogPage;
