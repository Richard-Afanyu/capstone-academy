import { defineType, defineField } from "sanity";
import React from "react";

export const userType = defineType({
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    defineField({
      name: "clerkId",
      title: "Clerk Id",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "User Email",
      type: "string",
    }),
    defineField({
      name: "imageUrl",
      title: "User Profile Image",
      type: "url",
    }),
    defineField({
      name: "role",
      type: "string",
      options: {
        list: ["student", "admin"],
      },
      title: "User Role",
      initialValue: "student",
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Join Date",
      initialValue: () => new Date().toISOString(),
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    }),
  ],

  preview: {
    select: {
      title: "firstName",
      subtitle: "email",
      profile: "imageUrl",
    },
    prepare({ title, profile, subtitle }) {
      return {
        title,
        subtitle,
        media: profile
          ? React.createElement("img", { src: profile, alt: title })
          : undefined,
      };
    },
  },
});
