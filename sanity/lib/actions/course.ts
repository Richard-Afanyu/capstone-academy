"use server";

import { client } from "../client";
// import { sanity } from "../sanity.server";

interface CreateCourse {
  // update banner image type
  bannerImage: string;
  title: string;
  description: string;
  duration: string;
  video: string;
  instructor: string;
  category: string;
  rating: string;
  createdAt: string;
}

export async function createCourse({
  bannerImage,
  title,
  description,
  duration,
  video,
  instructor,
  category,
  rating,
  createdAt = new Date().toISOString(),
}: CreateCourse) {
  try {
    const newCourse = await client.create({
      _type: "course",
      bannerImage,
      title,
      description,
      duration,
      video,
      instructor,
      category,
      rating,
      createdAt,
    });
    return newCourse;
  } catch (error) {
    console.error(`Failed to create new course: ${error}`);
  }
}

export const removeCourse = async (courseId: string) => {
  try {
    await client.delete(courseId);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting course: ${error}`);
    return { success: false, error };
  }
};
