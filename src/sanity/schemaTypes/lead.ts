import { defineType, defineField } from "sanity";

export const lead = defineType({
  name: "lead",
  title: "Leads",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "phone", type: "string" }),
  ],
});