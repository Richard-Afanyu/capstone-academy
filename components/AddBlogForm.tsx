"use client";

import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z.string().min(4),
  desc: z.string().min(10),
  image: z.string().url(),
  blog: z.string().min(10),
});

type FormType = z.infer<typeof formSchema>;

const AddBlogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(`failed to add course: ${error}`);
    }
  };
  return (
    <div className="border border-border rounded-[5px] px-4 py-4">
      <h2 className="smallTitle">Enter The Blog Details</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[20px] flex flex-col gap-4"
      >
        {/* blog title */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Blog Title:</Label>
          <Input
            placeholder="blog title..."
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
        {/* blog desc */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="desc">Blog Description:</Label>
          <Textarea
            placeholder="enter blog description..."
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
        {/* blog image */}
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

        {/* blog */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="blog">Blog:</Label>
          <Textarea
            placeholder="at least 10 characters..."
            id="blog"
            required
            {...register("blog")}
          />
          {errors.blog && (
            <span className="text-[14px] text-red-400">
              {errors.blog.message}
            </span>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding Blog..." : "Add Blog"}
        </Button>
      </form>
    </div>
  );
};

export default AddBlogForm;
