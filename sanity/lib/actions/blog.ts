"use server";

import { client } from "../client";
// import { sanity } from "../sanity.server";

interface CreateBlog {
  // update banner image type
  bannerImage: string;
  title: string;
  description: string;
  createdAt: string;
  blog: string;
}

export async function createCourse({
  bannerImage,
  title,
  description,
  blog,
  createdAt = new Date().toISOString(),
}: CreateBlog) {
  try {
    const newBlog = await client.create({
      _type: "blog",
      bannerImage,
      title,
      description,
      createdAt,
      blog,
    });
    return newBlog;
  } catch (error) {
    console.error(`Failed to create new blog: ${error}`);
  }
}

export const removeBlog = async (blogId: string) => {
  try {
    await client.delete(blogId);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting blog: ${error}`);
    return { success: false, error };
  }
};
