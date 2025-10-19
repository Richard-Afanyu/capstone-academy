"use server";

import { client } from "../client";
// import { sanity } from "../sanity.server";

interface CreateCompleted {
  userId: string;
  courseId: string;
  createdAt: string;
}

export async function createCompleted({
  userId,
  courseId,
  createdAt = new Date().toISOString(),
}: CreateCompleted) {
  try {
    const newCompleted = await client.create({
      _type: "completed",
      userId: { _type: "reference", _ref: userId },
      courseId: { _type: "reference", _ref: courseId },
      createdAt,
    });
    return newCompleted;
  } catch (error) {
    console.error(`Failed to create new completed: ${error}`);
  }
}
