import { type SchemaTypeDefinition } from "sanity";
import { blogType } from "./blogType";
import { completedType } from "./completed";
import { courseType } from "./courseType";
import { enrolledType } from "./enrolledType";
import { questionType } from "./questionType";
import { userType } from "./userType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogType,
    completedType,
    courseType,
    enrolledType,
    questionType,
    userType,
  ],
};
