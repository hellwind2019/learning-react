import { NavLink } from "react-router-dom";

const MainNav = () => (
  <nav className="flex items-center justify-center gap-4 py-4 mb-8 rounded-xl shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-300 dark:border-gray-800 mx-auto max-w-3xl">
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg font-medium transition ${
          isActive
            ? "bg-blue-500 text-white dark:bg-blue-700"
            : "text-gray-800 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-900"
        }`
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/expence-tracker"
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg font-medium transition ${
          isActive
            ? "bg-blue-500 text-white dark:bg-blue-700"
            : "text-gray-800 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-900"
        }`
      }
    >
      Expence Tracker
    </NavLink>
    <button
      onClick={() => document.body.classList.toggle("dark")}
      className="fixed top-4 right-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
    >
      Toggle Dark Mode
    </button>
  </nav>
);

export default MainNav;
