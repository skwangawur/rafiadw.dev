import { defineConfig } from "vite";
import rehypeSlug from "rehype-slug";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import mdx from "@mdx-js/rollup";
import { visit } from "unist-util-visit";

function rehypeMetaAsAttributes() {
    return (tree) => {
        visit(tree, "element", (node) => {
            if (node.tagName === "code" && node.data && node.data.meta) {
                node.properties.meta = node.data.meta;
            }
        });
    };
}

export default defineConfig({
    plugins: [
        {
            enforce: "pre",
            ...mdx({
                rehypePlugins: [rehypeMetaAsAttributes, rehypeSlug],
                providerImportSource: "@mdx-js/react",
            }),
        },
        react(),
    ],
    envDir: "./",
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },
});
