import { type SchemaTypeDefinition } from "sanity";
import { blogType } from "./blogType";
import { courseType } from "./courseType";
import { questionType } from "./questionType";
import { userType } from "./userType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, courseType, questionType, userType],
};
