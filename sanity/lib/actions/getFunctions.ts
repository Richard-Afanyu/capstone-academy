import { auth } from "@clerk/nextjs/server";
import { sanityFetch } from "../live";

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
      bannerImage, _id, title, slug, description, video, instructor, category, rating, createdAt, duration
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

// get user information
export const getUserInfo = async (userId: string) => {
  try {
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
