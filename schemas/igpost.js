export default {
  title: "IGPost",
  name: "igpost",
  type: "document",
  fields: [
    {
      title: "Título",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Cover",
      name: "cover",
      type: "image",
      field: [
        {
          title: "Alt",
          name: "alt",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Descripcion",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Link",
      name: "link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      cover: "cover",
    },
  },
};
