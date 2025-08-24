import { NavLink } from "react-router-dom";
import { Children, type ReactNode } from "react";
const HeaderNavLink = ({
  children,
  url,
}: {
  url: string;
  children: ReactNode;
}) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg font-medium transition ${
          isActive
            ? "bg-blue-500 text-white dark:bg-blue-700"
            : "text-gray-800 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-900"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default HeaderNavLink;
