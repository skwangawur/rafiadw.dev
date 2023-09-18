import * as React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  item: string;
  path: string;
  children: React.ReactNode;
  isActive?: boolean;
}

function NavItem(props: NavItemProps) {
  const { item, path, children, isActive } = props;
  return (
    <Link
      to={path}
      className={`flex justify-center px-3 py-3 dark:coral  ${
        isActive
          ? "bg-dark-charcoal-gray dark:bg-orange-500 border-coral dark:border-white "
          : "hover:bg-dark-slate-gray dark:hover:bg-orange-500 border-dark-slate-gray dark:border-white"
      } w-[33%] rounded-2xl border-[1px] dark:border-[1px]  group `}
    >
      <li className="flex items-center">
        {children}
        <h4
          className={`hidden dark:text-white   ml-3 md:block ${
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
