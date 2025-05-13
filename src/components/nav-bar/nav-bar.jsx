import { useLocation, useNavigate } from "react-router-dom";

import { FaHome, FaStar } from "react-icons/fa";

import NavOption from "./nav-option/nav-option";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate()

  return (
    <div className="bg-white h-14 rounded-md shadow-md flex items-center gap-4 p-2">
      <NavOption
        title="Página inicial"
        icon={FaHome}
        active={location.pathname === "/"}
        href="/"
      />
      <NavOption
        title="Meu favoritos"
        icon={FaStar}
        active={location.pathname.includes("favorites")}
        href="/favorites"
      />
    </div>
  );
};

export default Navbar;
