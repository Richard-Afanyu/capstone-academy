import { defineField, defineType } from "sanity";
import React from "react";

export const blogType = defineType({
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Blog Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Blog Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      title: "Blog Description",
      type: "string",
    }),
    defineField({
      name: "bannerImage",
      title: "Blog Banner Image URL",
      type: "url",
    }),
    defineField({
      name: "blog",
      title: "Blog Content",
      type: "markdown",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "createdAt",
      media: "bannerImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media: media
          ? React.createElement("img", { src: media, alt: title })
          : undefined,
      };
    },
  },
});
