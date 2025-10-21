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
        Here, our library of carefully selected courses partaining to the
        following categories - web development, app development, devops, and
        software management.
      </p>

      {/* display courses section */}
      <DisplayCourses courses={courses} />
    </div>
  );
};

export default CoursesPage;
