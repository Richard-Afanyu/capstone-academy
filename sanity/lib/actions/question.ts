"use server";

import { client } from "../client";
// import { sanity } from "../sanity.server";

interface CreateQuestion {
  chapter: string;
  question: string;
  createdAt: string;
  userId?: string;
  courseId: string;
}

export async function createQuestion({
  chapter,
  question,
  userId,
  courseId,
  createdAt = new Date().toISOString(),
}: CreateQuestion) {
  try {
    await client.create({
      _type: "question",
      chapter,
      question,
      createdAt,
      userId: { type: "reference", _ref: userId },
      courseId: { type: "reference", _ref: courseId },
    });
  } catch (error) {
    console.error(`Failed to submit new question: ${error}`);
  }
}
