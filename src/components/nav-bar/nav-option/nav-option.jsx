import { useNavigate } from "react-router-dom"

const NavOption = ({ title, icon: Icon, active, href }) => {
  const navigate = useNavigate()
  
  return (
    <div
      className={`p-2 rounded-md flex items-center gap-2 hover:bg-emerald-200 hover:cursor-pointer ${
        active && "bg-emerald-300 text-emerald-800"
      }`}
      onClick={() => navigate(href)}
    >
      <Icon />
      <h1 className="font-semibold">{title}</h1>
    </div>
  );
};

export default NavOption;
