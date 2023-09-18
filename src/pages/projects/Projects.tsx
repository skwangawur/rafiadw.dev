import ProjectCard from "../../components/ui/ProjectCard";

function Projects() {
  const tech: string[] = ["laravel", "typescript", "c++", "arduino", "nodejs"];
  return (
    <section className="grid sm:grid-cols-card sm:grid-cols-2 gap-4 mt-7 justify-center grid-cols-1">
      <ProjectCard techStacks={tech} />
      <ProjectCard techStacks={tech} />
      <ProjectCard techStacks={tech} />
    </section>
  );
}

export default Projects;
