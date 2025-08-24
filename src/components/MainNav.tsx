import { NavLink } from "react-router-dom";
import HeaderNavLink from "./HeaderNavLink";

const MainNav = () => (
  <nav
    className="
    flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4
    
    py-2 lg:py-4 mb-4 lg:mb-8
    
    rounded-xl border shadow-lg backdrop-blur
    
    bg-white/80 dark:bg-gray-900/80
    border-gray-300 dark:border-gray-800
    
    mx-auto max-w-sm sm:max-w-sm lg:max-w-3xl
  "
  >
    <HeaderNavLink url="/">Main</HeaderNavLink>
    <HeaderNavLink url="/expence-tracker">Expence Tracker</HeaderNavLink>
    <HeaderNavLink url="/backend">Backend</HeaderNavLink>
    <button
      onClick={() => document.body.classList.toggle("dark")}
      className="px-4 py-2 rounded-lg font-medium transition "
    >
      Toggle Dark Mode
    </button>
  </nav>
);

export default MainNav;
