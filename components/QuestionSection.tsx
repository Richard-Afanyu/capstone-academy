"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const questionSchema = z.object({
  chapter: z.string().min(4),
  question: z.string().min(10),
});

type FormType = z.infer<typeof questionSchema>;

const QuestionSection = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormType>({
    resolver: zodResolver(questionSchema),
  });

  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action="/"
      className="flex flex-col gap-4"
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
          placeholder="Please enter the chapter..."
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
