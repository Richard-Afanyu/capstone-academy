import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCourseBySlug } from "@/sanity/lib/actions/getFunctions";
import { ClerkLoaded, SignedOut, SignedIn } from "@clerk/nextjs";
import { Briefcase } from "lucide-react";

const CourseDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const actual = await getCourseBySlug(slug);

  if (!actual) {
    return (
      <div className="mt-[20px]">
        <h2 className="bigTitle">Course not found</h2>
        <p>The course you are looking for does not exist.</p>
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
        <h2 className="bigTitle">Course Title: {actual.title}</h2>
        <p className="text-muted-foreground">
          Course Description: {actual.description}
        </p>
        <h3 className="smallTitle">Course Instructor: {actual.instructor}</h3>
        <h3 className="smallTitle">Course Categry: {actual.category}</h3>
        <h3 className="smallTitle">Course Rating: {actual.rating}</h3>
      </div>

      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex items-center gap-4">
        <ClerkLoaded>
          <SignedIn>
            <Button>
              <Link
                href={`/courses/${slug}`}
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
        <Button>
          <Link href={`/courses/${slug}`}>Enroll Now</Link>
        </Button>
        <Button>
          <Link href="/courses">Go back</Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
