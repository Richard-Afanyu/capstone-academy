import React from "react";
import DisplayCourses from "@/components/DisplayCourses";
import { getAllCourses } from "@/sanity/lib/actions/getFunctions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Capstone Academy",
  description: "courses page for the capstone academy website",
};

const CoursesPage = async () => {
  const courses = await getAllCourses();
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
