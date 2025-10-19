import React from "react";
import QuestionSection from "@/components/QuestionSection";
import { Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import YouTubePlayer from "@/components/VideoPlayer";
import { getCourseBySlug } from "@/sanity/lib/actions/getFunctions";

const EnrollPage = async ({ params }: { params: { slug: string } }) => {
  const pageParams = await params;
  const slug = pageParams.slug;
  const actual = await getCourseBySlug(slug);
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          dolorem, numquam sapiente itaque tempore quae qui fugiat autem rem
          hic.
        </p>

        {/* question form */}
        <div className="mt-[20px]">
          <QuestionSection />
        </div>

        {/* finished section */}
        <div className="flex flex-col gap-4 mt-[40px]">
          <h2 className="bigTitle">Finished?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            consectetur mollitia sapiente quibusdam officiis impedit iste facere
            est cupiditate adipisci?
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
