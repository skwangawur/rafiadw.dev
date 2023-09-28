import { ProjectCard } from "@/components/ui/ProjectCard";
import projects from "@/content/projects";

function Projects() {
    return (
        <section className="grid sm:grid-cols-card sm:grid-cols-2 gap-4 mt-7 justify-center grid-cols-1">
            {projects?.map((project, index) => {
                return (
                    <ProjectCard
                        imageUrl={project.imageUrl}
                        techStacks={project.techStacks}
                        projectLink={project.projectLink}
                        desc={project.desc} // Fixed the typo here from "decs" to "desc"
                        title={project.title}
                        key={index}
                    />
                );
            })}
        </section>
    );
}

export default Projects;
