import { defineField, defineType } from "sanity";

export const questionType = defineType({
  name: "question",
  title: "Questions",
  type: "document",
  fields: [
    defineField({
      name: "chapter",
      title: "Question Chapter",
      type: "string",
    }),
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "userId",
      title: "User who sent the question",
      type: "reference",
      to: [{ type: "user" }],
    }),
    defineField({
      name: "couseId",
      title: "Course in concern",
      type: "reference",
      to: [{ type: "course" }],
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      initialValue: new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "chapter",
      subtitle: "question",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      };
    },
  },
});
