import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Blogs from "../pages/blogs";
import Projects from "../pages/projects";
import Experiences from "../pages/experiences";
import Layout from "../pages/Layout";

function RoutesLink() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Blogs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experiences" element={<Experiences />} />
      </Route>
    </Routes>
  );
}

export default RoutesLink;
