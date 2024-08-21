import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "../assets/Karthik.svg";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", link: "/" },
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Work", link: "#work" },
  { name: "Contact", link: "#contact" },
];

const Navbar = ({ setActive }) => {
  return (
    <div className="w-full h-[56px] bg-[#0C1426] flex items-center">
      <div className="section-container">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="logo" />
          <ul className="hidden md:flex gap-[49px]">
            {links.map((item, i) => (
              <li
                className="text-white font-OutFit cursor-pointer hover:text-[#E8BF38] transition-all duration-300 ease-in-out"
                key={i}
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <HiMenuAlt3
            onClick={() => setActive((prev) => !prev)}
            className="md:hidden block text-white text-2xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
