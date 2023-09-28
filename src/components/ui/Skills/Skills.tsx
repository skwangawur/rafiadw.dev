import { BiCodeAlt } from "@/assets/icon";
import { TechTools } from "../TechCard";

function Skills() {
    return (
        <div className="mt-4 text-white">
            <div>
                <div className="flex items-center gap-3">
                    <BiCodeAlt
                        className="dark:text-dark-charcoal-gray"
                        size={28}
                    />
                    <h1 className="text-white font-montserrat text-2xl dark:text-dark-charcoal-gray">
                        {" "}
                        Skills
                    </h1>
                </div>
                <p className="text-gray-500 font-poppins  text-md mt-2">
                    The tool that I've used and am still learning, and of
                    course, I still don't fully understand it.
                </p>
                <TechTools />
            </div>
        </div>
    );
}

export default Skills;
