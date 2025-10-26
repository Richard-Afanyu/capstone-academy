"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { createQuestion } from "@/sanity/lib/actions/question";
import { useUser } from "@clerk/nextjs";

const questionSchema = z.object({
  chapter: z.string().min(4),
  question: z.string().min(10),
});

type FormType = z.infer<typeof questionSchema>;

type Props = {
  courseId: string;
};

const QuestionSection = ({ courseId }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormType>({
    resolver: zodResolver(questionSchema),
  });
  const { user } = useUser();
  console.log("user id:", user?.id);
  console.log("course id:", courseId);

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    try {
      // submit question function
      await createQuestion({
        chapter: data.chapter,
        question: data.question,
        userId: user?.id,
        courseId: courseId,
        createdAt: new Date().toISOString(),
      });
      window.alert("Your question has been sumitted sucessfully");
      const form = document.querySelector("form") as HTMLFormElement;
      if (form) {
        form.reset();
      }
    } catch (error) {
      window.alert("Something went wrong");
      throw new Error(`Failed to submit question: ${error}`);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 form"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="chapter">Chaper:</Label>
        <Input
          placeholder="Please enter the chapter..."
          id="chapter"
          {...register("chapter")}
        />
        {errors.chapter && (
          <span className="text-red-400 text-[14px]">
            {errors.chapter.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="question">Question:</Label>
        <Textarea
          placeholder="Please enter the question..."
          id="question"
          {...register("question")}
        />
        {errors.question && (
          <span className="text-red-400 text-[14px]">
            {errors.question.message}
          </span>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting your question..." : "Submit Question"}
      </Button>
    </form>
  );
};

export default QuestionSection;
