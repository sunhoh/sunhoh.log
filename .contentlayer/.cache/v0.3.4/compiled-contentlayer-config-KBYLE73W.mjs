// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
var rehypeOptions = {
  theme: "material-theme-ocean",
  keepBackground: true
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    thumbnail: {
      type: "string"
    },
    category: {
      type: "string"
    },
    tags: { type: "list", of: { type: "string" } },
    date: {
      type: "date",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `article/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/article",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KBYLE73W.mjs.map
