import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartPie } from "react-icons/fa";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-[#244D3F] text-white"
        : "text-gray-300 hover:bg-[#2d2d2d] hover:text-white"
    }`;

  return (
    <nav className="bg-[#1E1E1E] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <div className="bg-[#244D3F] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
            K
          </div>

          <h1 className="text-white text-2xl font-bold">
            KeenKeeper
          </h1>
        </div>

        
        <div className="flex items-center gap-4">
          <NavLink to="/" className={navLinkClass}>
            <FaHome />
            <span>Home</span>
          </NavLink>

          <NavLink to="/timeline" className={navLinkClass}>
            <FaClock />
            <span>Timeline</span>
          </NavLink>

          <NavLink to="/stats" className={navLinkClass}>
            <FaChartPie />
            <span>Stats</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;