import { type SchemaTypeDefinition } from "sanity";
import { post } from "./post";
import { lead } from "./lead";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, lead],
};