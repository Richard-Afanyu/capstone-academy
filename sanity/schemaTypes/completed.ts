import { defineField, defineType } from "sanity";

export const completedType = defineType({
  name: "completed",
  title: "Completed Courses",
  type: "document",
  fields: [
    defineField({
      name: "userId",
      title: "User Id",
      type: "reference",
      to: [{ type: "user" }],
    }),
    defineField({
      name: "courseId",
      title: "Course Id",
      type: "reference",
      to: [{ type: "course" }],
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "userId",
      subtitle: "courseId",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      };
    },
  },
});
