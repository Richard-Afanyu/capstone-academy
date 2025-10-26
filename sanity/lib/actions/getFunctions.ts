import { auth } from "@clerk/nextjs/server";
import { sanityFetch } from "../live";
import { success } from "zod";

export const getUserId = async () => {
  const { userId } = await auth();
  if (!userId) return "";
  return userId;
};

// get all courses
export const getAllCourses = async () => {
  try {
    const courses = await sanityFetch({
      query: `*[_type == "course"] | order(createdAt desc) {
      bannerImage, title, slug, description, video, instructor, category, rating, createdAt, duration
      }`,
    });
    return courses?.data || [];
  } catch (error) {
    console.error(`failed to fetch all courses: ${error}`);
    return [];
  }
};

// get courses by slug
export const getCourseBySlug = async (slug: string) => {
  try {
    const course = await sanityFetch({
      query: `*[_type == "course" && slug.current == $slug][0] {
      bannerImage, title, slug, description, video, instructor, category, rating, createdAt, duration
      }`,
      params: { slug },
    });
    return course?.data || [];
  } catch (error) {
    console.error(`failed to fetch all courses: ${error}`);
    return [];
  }
};

// get all blogs
export const getAllBlogs = async () => {
  try {
    const blogs = await sanityFetch({
      query: `*[_type == "blog"] | order(createdAt desc) {
      bannerImage, title, slug, description, createdAt, blog
      }`,
    });
    return blogs?.data || [];
  } catch (error) {
    console.error(`failed to fetch all blogs: ${error}`);
    return [];
  }
};

// get blogs by slug
export const getBlogsBySlug = async (slug: string) => {
  try {
    const blogs = await sanityFetch({
      query: `*[_type == "blog" && slug.current == $slug][0]{
      bannerImage, title, slug, description, createdAt, blog
      }`,
      params: { slug },
    });
    return blogs?.data || [];
  } catch (error) {
    console.error(`failed to fetch all blogs: ${error}`);
    return [];
  }
};

// get all users
export const getAllUsers = async () => {
  try {
    const users = await sanityFetch({
      query: `*[_type == "user"] | order(createdAt desc) {
      email, role, firstName, lastName, createdAt
      }`,
    });
    return users?.data || [];
  } catch (error) {
    console.error(`failed to fetch all users: ${error}`);
    return [];
  }
};

// get user completed courses
export const getUserCompletedCourses = async (userId: string) => {
  try {
    const completedCourses = await sanityFetch({
      query: `*[_type == "completed" && userId._ref == $userId] {
      courseId
      }`,
      params: { userId },
    });
    return completedCourses?.data || [];
  } catch (error) {
    console.error(`failed to fetch all user completed courses: ${error}`);
    return [];
  }
};

// get user enrolled courses
export const getUserEnrolledCourses = async (userId: string) => {
  try {
    const enrolledCourses = await sanityFetch({
      query: `*[_type == "enrolled" && userId._ref == $userId] {
      courseId
      }`,
      params: { userId },
    });
    return enrolledCourses?.data || [];
  } catch (error) {
    console.error(`failed to fetch all user enrolled courses: ${error}`);
    return [];
  }
};

// get course enrollers
export const getCourseEnrollers = async (courseId: string) => {
  try {
    const courseEnrollers = await sanityFetch({
      query: `*[_type == "enrolled" && courseId._ref == $courseId] | order(createdAt desc) {
      courseId
      }`,
      params: { courseId },
    });
    return courseEnrollers?.data || [];
  } catch (error) {
    console.error(`failed to fetch all course enrollers: ${error}`);
    return [];
  }
};

// get course completers
export const getCourseCompleters = async (courseId: string) => {
  try {
    const { userId } = await auth();
    if (!userId) return "";
    const completedUser = await sanityFetch({
      query: `*[_type == "completed" && userId == $userId && courseId == &courseId][0]`,
      params: { userId, courseId },
    });
    return completedUser?.data || {};
  } catch (error) {
    throw new Error(`Failed to get course completers: ${error}`);
  }
};

// get user information
export const getUserInfo = async () => {
  try {
    const { userId } = await auth();
    const userInfo = await sanityFetch({
      query: `*[_type == "user" && clerkId == $userId][0] {email, firstName, lastName, imageUrl, createdAt, clerkId}`,
      params: { userId },
    });
    return userInfo?.data || {};
  } catch (error) {
    throw new Error(`Failed to fetch user information: ${error}`);
    return { success: false, error };
  }
};
