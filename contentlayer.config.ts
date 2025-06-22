import { DocumentTypeDef, defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode, {
  Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";

const rehypeOptions: RehypePrettyCodeOptions = {
  theme: "material-theme-ocean",
  keepBackground: true,
};

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: "string",
    },
    thumbnail: {
      type: "string",
    },
    category: {
      type: "string",
    },
    tags: { type: "list", of: { type: "string" } },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `posts/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: "./src/article",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
  },
})
