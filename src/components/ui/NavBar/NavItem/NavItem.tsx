import * as React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
    item: string;
    path: string;
    icon: React.ReactElement;
    isActive?: boolean;
    ariaLabel: string;
}

function NavItem(props: NavItemProps) {
    const { item, path, icon, isActive, ariaLabel } = props;
    return (
        <Link
            aria-label={ariaLabel}
            to={path}
            className={`flex justify-center px-3 py-3 dark:coral  ${
                isActive
                    ? "bg-dark-charcoal-gray dark:bg-orange-500 border-coral dark:border-white "
                    : "hover:bg-dark-slate-gray dark:hover:bg-orange-500 border-dark-slate-gray dark:border-white"
            } w-[33%] rounded-2xl border-[1px] dark:border-[1px]  group `}
        >
            <li className="flex items-center gap-2">
                {icon}
                <h4
                    className={`hidden dark:text-white md:block ${
                        isActive ? "text-coral " : "text-white"
                    }`}
                >
                    {item}
                </h4>
            </li>
        </Link>
    );
}

export default NavItem;
