import React from "react";
import DisplayCourses from "@/components/DisplayCourses";
import { getAllCourses } from "@/sanity/lib/actions/getFunctions";

const CoursesPage = async () => {
  // const courses: CoursesType = CoursesData;
  const courses = await getAllCourses();
  console.log(courses);
  return (
    <div className="mt-[20px]">
      <h2 className="bigTitle">Our Courses</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem omnis
        incidunt voluptatem perspiciatis dolorem natus nihil eveniet laboriosam
        officiis. Nam?
      </p>

      {/* display courses section */}
      <DisplayCourses courses={courses} />
    </div>
  );
};

export default CoursesPage;
