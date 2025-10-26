"use server";

// import { client } from "../client";
import { sanity } from "../sanity.server";

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
  if (!userId) {
    throw new Error("User ID is required to create a question");
  }

  if (!courseId) {
    throw new Error("Course ID is required to create a question");
  }

  try {
    const result = await sanity.create({
      _type: "question",
      chapter,
      question,
      createdAt,
      userId: { _type: "reference", _ref: userId },
      courseId: { _type: "reference", _ref: courseId },
    });

    return { success: true, data: result };
  } catch (error) {
    console.error(`Failed to submit question:`, error);
    throw error; // Re-throw the error so we can handle it in the component
  }
}
