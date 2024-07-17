import Logo from "../assets/Karthik.svg";

const links = ["Home", "Services", "Skills", "Work", "Contact"];

const Navbar = () => {
  return (
    <div className="w-full h-[56px] bg-[#0C1426] flex items-center">
      <div className="section-container">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="logo" />
          <ul className="flex gap-[49px]">
            {links.map((item, i) => (
              <li className="text-white font-OutFit" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
