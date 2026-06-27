import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1E1E1E] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold tracking-wide">
          KeenKeeper
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#244D3F] font-semibold"
                : "text-gray-300 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              isActive
                ? "text-[#244D3F] font-semibold"
                : "text-gray-300 hover:text-white transition"
            }
          >
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              isActive
                ? "text-[#244D3F] font-semibold"
                : "text-gray-300 hover:text-white transition"
            }
          >
            Stats
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;