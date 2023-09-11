import * as React from "react";

interface NavItemProps {
  item: string;
  children: React.ReactNode;
  activeItem?: boolean;
}

function NavItem(props: NavItemProps) {
  const { item, children, activeItem } = props;
  return (
    <li
      className={`flex justify-center px-3 py-3 bg-dark-charcoal-gray w-[33%] rounded-2xl border-[1px] border-dark-slate-gray group hover:border-coral ${activeItem}`}
    >
      <a href="" className="flex items-center" target="_blank">
        {children}
        <h4 className="hidden text-white  ml-3 md:block group-hover:text-coral">
          {item}
        </h4>
      </a>
    </li>
  );
}

export default NavItem;
