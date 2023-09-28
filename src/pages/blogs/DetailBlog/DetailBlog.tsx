import * as React from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import component from "@/components/ui/MDXComponent/MDXComponent";

function DetailBlog() {
    const { id } = useParams();

    const BlogLazy = React.lazy(
        () => import(`../../../content/blogs/${id}.mdx`)
    );
    return (
        <MDXProvider components={component}>
            <React.Suspense>
                <article className="flex justify-center py-20 ">
                    <section className="max-w-3xl border-2 border-dashed rounded-md border-dark-slate-gray p-6">
                        <BlogLazy />
                    </section>
                </article>
            </React.Suspense>
        </MDXProvider>
    );
}

export default DetailBlog;
