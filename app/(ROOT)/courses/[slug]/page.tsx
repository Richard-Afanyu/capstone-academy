import React from "react";
import QuestionSection from "@/components/QuestionSection";
import { Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import YouTubePlayer from "@/components/VideoPlayer";
import { getCourseBySlug } from "@/sanity/lib/actions/getFunctions";
import Link from "next/link";

const EnrollPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const actual = await getCourseBySlug(slug);

  if (!actual) {
    return (
      <div>
        <h2>Sorry! this blog post does not exist</h2>
        <Link href="/courses">Return to courses</Link>
      </div>
    );
  }
  return (
    <div className="mt-[20px] gap-[40px] grid grid-cols-1 md:grid-cols-5 xl:grid-cols-7">
      {/* left section */}
      <div className="md:col-span-3 xl:col-span-4">
        {/* left top */}
        <div>
          <YouTubePlayer videoId="hdI2bqOjy3c" />
        </div>

        {/* course info section */}
        <div className="mt-[20px] flex flex-col gap-[20px]">
          <h2 className="bigTitle">Course Title: {actual.title}</h2>
          <p className="text-muted-foreground line-clamp-3">
            Course Description: {actual.description}
          </p>
          <h3 className="smallTitle">Course Instructor: {actual.instructor}</h3>
          <h3 className="smallTitle">Course Categry: {actual.category}</h3>
          <h3 className="smallTitle">Enrolled: {actual.enrolled}</h3>
          <h3 className="smallTitle">Course Rating: {actual.rating}</h3>
        </div>
      </div>

      {/* right section */}
      <div className="md:col-span-2 xl:col-span-3">
        <h2 className="bigTitle">Have any questions?</h2>
        <p className="text-muted-foreground">
          Feel free to send us any questions you may have during your learning
          process and we will be sure to get back to you soonest.
        </p>

        {/* question form */}
        <div className="mt-[20px]">
          <QuestionSection />
        </div>

        {/* finished section */}
        <div className="flex flex-col gap-4 mt-[40px]">
          <h2 className="bigTitle">Finished?</h2>
          <p>
            All done? Mark this course as completed to keep statistics of your
            learning progress with us. You can find your total completed courses
            on your account profile
          </p>
          <Button>
            Finished <Smile />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnrollPage;
