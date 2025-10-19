import { defineType, defineField } from "sanity";
import React from "react";

export const courseType = defineType({
  name: "course",
  title: "Courses",
  type: "document",
  fields: [
    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "url",
    }),
    defineField({
      name: "title",
      title: "Course Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      title: "Course Description",
      type: "string",
    }),
    defineField({
      name: "duration",
      title: "Course Duration",
      type: "string",
    }),
    defineField({
      name: "video",
      title: "Course Video Link",
      type: "string",
    }),
    defineField({
      name: "instructor",
      title: "Course Instructor",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Course Category",
      type: "string",
      options: {
        list: ["web-dev", "app-dev", "devops", "management"],
      },
      initialValue: "web-dev",
    }),
    defineField({
      name: "rating",
      title: "Course Rating",
      type: "string",
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      title: "CreatedAt",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "bannerImage",
      subtitle: "category",
    },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media: media
          ? React.createElement("img", { src: media, alt: title })
          : undefined,
        subtitle,
      };
    },
  },
});
