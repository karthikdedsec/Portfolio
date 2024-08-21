import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../assets/Karthik.svg";

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Solutions", link: "/solutions" },
  { name: "Contact", link: "/contact" },
];
const Sidebar = ({ setActive, active }) => {
  return (
    <div
      className={`h-full w-64 z-50 fixed bg-[#222C36] transition-all duration-300 ease-in-out ${
        active ? "top-0 right-0" : "top-0 -right-64"
      }`}
    >
      <MdClose
        onClick={() => setActive((prev) => !prev)}
        className="text-white
         font-semibold text-4xl mt-5 ml-4"
      />

      <div className="px-7 mt-12">
        <div className="flex flex-col gap-6">
          <ul className="flex text-white flex-col gap-11 pt-16">
            {links.map((item, i) => (
              <li onClick={() => setActive(false)} key={i}>
                <Link className="text-2xl font-medium" to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-12">
            <p className="mt-32 text-white">©karthikraj.site</p>
            <img src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
