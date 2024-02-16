import { useLocation } from "react-router-dom";
import { BsChatRightHeart, MdWorkOutline, SiOpenproject } from "@/assets/icon";
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
                    ariaLabel="read about my blogs"
                    path="/"
                    item="Blogs"
                    isActive={pathname === "/"}
                    icon={
                        <BsChatRightHeart
                            className={`${
                                pathname === "/"
                                    ? "text-coral dark:text-white"
                                    : "text-white"
                            } `}
                        />
                    }
                />
                <NavItem
                    ariaLabel="Read about my other project i built"
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
                    ariaLabel="it's about my journey"
                    path="/me"
                    item="Me :)"
                    isActive={pathname === "/me"}
                    icon={
                        <MdWorkOutline
                            className={`${
                                pathname === "/me"
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
