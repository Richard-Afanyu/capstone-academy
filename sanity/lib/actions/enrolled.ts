"use server";

import { client } from "../client";
// import { sanity } from "../sanity.server";

interface CreateEnrolled {
  userId: string;
  courseId: string;
  createdAt: string;
}

export async function createEnrolled({
  userId,
  courseId,
  createdAt = new Date().toISOString(),
}: CreateEnrolled) {
  try {
    const newEnrolled = await client.create({
      _type: "enrolled",
      userId: { _type: "reference", _ref: userId },
      courseId: { _type: "reference", _ref: courseId },
      createdAt,
    });
    return newEnrolled;
  } catch (error) {
    console.error(`Failed to create new enrolled: ${error}`);
  }
}
