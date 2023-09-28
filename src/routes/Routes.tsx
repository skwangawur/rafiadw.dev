import { Routes, Route } from "react-router-dom";
import * as React from "react";
import DetailBlog from "@/pages/blogs/DetailBlog/DetailBlog";
import NotFound from "@/pages/notfound/NotFound";

const LayoutLazy = React.lazy(() => import("@/pages/Layout"));
const BlogsLazy = React.lazy(() => import("@/pages/blogs"));
const ProjectstLazy = React.lazy(() => import("@/pages/projects"));
const ExperiencesLazy = React.lazy(() => import("@/pages/experiences"));

function RoutesLink() {
    return (
        <Routes>
            <Route path="/" element={<LayoutLazy />}>
                <Route index element={<BlogsLazy />} />
                <Route path="projects" element={<ProjectstLazy />} />
                <Route path="experiences" element={<ExperiencesLazy />} />
            </Route>
            <Route path="/blogs/:id" index element={<DetailBlog />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesLink;
