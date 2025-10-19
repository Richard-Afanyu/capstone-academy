"use server";

import { client } from "../client";
// import { sanity } from "../sanity.server";

interface CreateQuestion {
  chapter: string;
  question: string;
  createdAt: string;
}

export async function createQuestion({
  chapter,
  question,
  createdAt = new Date().toISOString(),
}: CreateQuestion) {
  try {
    const newQuestion = await client.create({
      _type: "question",
      chapter,
      question,
      createdAt,
    });
    return newQuestion;
  } catch (error) {
    console.error(`Failed to create new question: ${error}`);
  }
}
