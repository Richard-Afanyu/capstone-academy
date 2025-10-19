"use client";

import { CourseType } from "@/types";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import Filter from "./Filter";
import { Loader } from "lucide-react";

interface Props {
  courses: CourseType[];
}

const DisplayCourses = ({ courses }: Props) => {
  const [filter, setFilter] = useState<string>("all");
  let displayedCourses;

  if (filter == "all") {
    displayedCourses = courses;
  } else if (filter == "web-dev") {
    displayedCourses = courses.filter((item) => item.category == "web-dev");
  } else if (filter == "app-dev") {
    displayedCourses = courses.filter((item) => item.category == "app-dev");
  } else if (filter == "devops") {
    displayedCourses = courses.filter((item) => item.category == "devops");
  } else {
    displayedCourses = courses.filter((item) => item.category == "management");
  }
  return (
    <div className="">
      <Filter filter={filter} setFilter={setFilter} />
      <div>
        {displayedCourses.length == 0 ? (
          <h2 className="flex items-center gap-2 mt-[40px]">
            No courses of this category are available at the moment <Loader />
          </h2>
        ) : (
          <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
            {displayedCourses.map((item: CourseType) => (
              <CourseCard key={item.slug.current} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayCourses;
