import { useLocation } from "react-router-dom";
import {
    BsChatRightHeart,
    MdWorkOutline,
    SiOpenproject,
} from "@/assets/icon";
import NavItem from "./NavItem/NavItem";

function Navbar() {
    const pathname = useLocation().pathname;

    return (
        <nav
            role="navigation"
            className="sticky top-1 z-50 w-full lg:h-fit p-2 rounded-3xl bg-dark-charcoal-gray dark:bg-coral dark:shadow-lg mt-10"
        >
            <ul className="flex gap-2">
                <NavItem
                    path="/"
                    item="Blogs"
                    isActive={pathname === "/"}
                    icon={
                        <BsChatRightHeart
                            className={`${
                                pathname === "/" ? "text-coral dark:text-white" : "text-white"
                            } `}
                        />
                    }
                />
                <NavItem
                    path="/projects"
                    item="Projects"
                    isActive={pathname === "/projects"}
                    icon={
                        <SiOpenproject
                            className={`${
                                pathname === "/projects"
                                    ? "text-coral dark:text-white"
                                    : "text-white"
                            } `}
                        />
                    }
                />

                <NavItem
                    path="/experiences"
                    item="Experiences"
                    isActive={pathname === "/experiences"}
                    icon={
                        <MdWorkOutline
                            className={`${
                                pathname === "/experiences"
                                    ? "text-coral dark:text-white"
                                    : "text-white"
                            } `}
                        />
                    }
                />
            </ul>
        </nav>
    );
}

export default Navbar;
