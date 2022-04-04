import imageTypes from "./imageTypes";

export default {
  title: "Gallery",
  name: "gallery",
  type: "document",
  fields: [
    {
      title: "Gallery name",
      name: "title",
      type: "string",
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          fields: [
            {
              title: "Texto alternativo",
              name: "alt",
              type: "string",
            },
            {
              title: "Tipo de imagen",
              name: "imgType",
              type: "string",
              options: {
                list: [...imageTypes],
              },
            },
          ],
        },
      ],
    },
  ],
};
