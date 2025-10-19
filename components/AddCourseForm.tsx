"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  title: z.string().min(4),
  desc: z.string().min(10),
  image: z.string().url(),
  duration: z.string(),
  video: z.string().url(),
  instructor: z.string(),
  rating: z.string(),
  // category: z.string(),
});

type FormType = z.infer<typeof formSchema>;

const AddCourseForm = () => {
  const [category, setCategory] = useState<string>("web-dev");
  const handleCatChange = (value: string) => {
    setCategory(value);
  };
  const categories = [
    {
      category: "web-dev",
    },
    {
      category: "app-dev",
    },
    {
      category: "devops",
    },
    {
      category: "management",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    console.log("submitted");
    try {
      console.log(`COURSE DATA: ${data}`);
      console.log(`COURSE CATEGORY: ${category}`);
    } catch (error) {
      console.error(`failed to add course: ${error}`);
    }
  };

  return (
    <div className="border border-border rounded-[5px] px-4 py-4">
      <h2 className="smallTitle">Enter The Course Details</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[20px] flex flex-col gap-4"
      >
        {/* course title */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Course Title:</Label>
          <Input
            placeholder="course title..."
            {...register("title")}
            id="title"
            required
          />
          {errors.title && (
            <span className="text-[14px] text-red-400">
              {errors.title.message}
            </span>
          )}
        </div>
        {/* course desc */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="desc">Course Description:</Label>
          <Textarea
            placeholder="enter your course description..."
            id="desc"
            required
            {...register("desc")}
          />
          {errors.desc && (
            <span className="text-[14px] text-red-400">
              {errors.desc.message}
            </span>
          )}
        </div>
        {/* course image */}

        <div className="flex flex-col gap-2">
          <Label htmlFor="image">Banner Image:</Label>
          <Input
            placeholder="Enter a valid image url..."
            id="image"
            required
            {...register("image")}
          />
          {errors.image && (
            <span className="text-[14px] text-red-400">
              {errors.image.message}
            </span>
          )}
        </div>
        {/* course duration */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="duration">Course Duration:</Label>
          <Input
            placeholder="course duration..."
            {...register("duration")}
            id="duration"
            required
          />
          {errors.duration && (
            <span className="text-[14px] text-red-400">
              {errors.duration.message}
            </span>
          )}
        </div>
        {/* course video link */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="video">Course video Link:</Label>
          <Input
            placeholder="video link..."
            {...register("video")}
            id="video"
            required
          />
          {errors.video && (
            <span className="text-[14px] text-red-400">
              {errors.video.message}
            </span>
          )}
        </div>
        {/* course instructor */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="instructor">Course instructor:</Label>
          <Input
            placeholder="course instructor..."
            {...register("instructor")}
            id="instructor"
            required
          />
          {errors.instructor && (
            <span className="text-[14px] text-red-400">
              {errors.instructor.message}
            </span>
          )}
        </div>
        {/* course rating */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="rating">Course rating:</Label>
          <Input
            placeholder="course rating (number)..."
            {...register("rating")}
            id="rating"
            required
          />
          {errors.rating && (
            <span className="text-[14px] text-red-400">
              {errors.rating.message}
            </span>
          )}
        </div>
        {/* category */}
        <div className="flex flex-col gap-2">
          <Label>Course Category: </Label>
          <Select onValueChange={handleCatChange} defaultValue="">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>All Categories</SelectLabel>
                {categories.map((item, index: number) => (
                  <SelectItem key={index} value={item.category}>
                    {item.category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding Course..." : "Add Course"}
        </Button>
      </form>
    </div>
  );
};

export default AddCourseForm;
