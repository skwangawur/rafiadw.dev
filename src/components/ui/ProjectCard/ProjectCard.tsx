import BlogImage from "../../../assets/images/image.png";
import { RxExternalLink } from "react-icons/rx";
import { TechStack } from "./TechCard/TechCard";

interface ProjectCardProps {
  techStacks: string[];
  projectLink?: string;
}

function ProjectCard(props: ProjectCardProps) {
  const { techStacks, projectLink } = props;

  return (
    <div className="group ">
      <div className="flex flex-col  p-2 border border-dark-slate-gray gap-3 sm:gap-5 rounded-xl group-hover:scale-105 border-collapse dark:border-gray-400 ">
        <div className="rounded overflow-hidden w-full h-[150px]">
          <img
            src={BlogImage}
            alt="blog image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <TechStack tech={techStacks} />
          </div>
          <a href={projectLink} className="flex">
            <h3 className="text-white text-xl sm:text-2xl font-bold group-hover:text-coral dark:text-charcoal-gray">
              Spotify Clone
            </h3>
            <RxExternalLink className="text-white group-hover:text-coral dark:text-charcoal-gray" />
          </a>
          <p className="text-gray-500 text-[12px] sm:text-sm dark:text-dark-slate-gray">
            Apa masukan yang paling berkesan dalam hidupmu?
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
