import { defineConfig } from "vite";
import rehypeSlug from "rehype-slug";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import mdx from "@mdx-js/rollup";
import { remarkCodeHike } from "@code-hike/mdx";
import theme from "shiki/themes/monokai.mjs";
import remarkMdxCodeMeta from "remark-mdx-code-meta";

export default defineConfig({
    plugins: [
        {
            enforce: "pre",
            ...mdx({
                remarkPlugins: [[remarkCodeHike, { theme }]],
                rehypePlugins: [rehypeSlug],
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
