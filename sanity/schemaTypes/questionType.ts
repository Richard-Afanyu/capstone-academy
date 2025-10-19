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
