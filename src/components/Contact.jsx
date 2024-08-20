import lines from "../assets/lines.png";
import star from "../assets/contactstar.png";
import instagram from "../assets/instagram.svg";
import discord from "../assets/discord.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";

const links = ["Home", "Services", "Skills", "Work", "Contact"];
const Contact = () => {
  return (
    <div className="w-full">
      <div className="section-container">
        <p className="text-center pt-5 font-OutFit font-medium text-lg text-[#E8BF38]">
          Contact.
        </p>
        <hr className="w-24 mx-auto border-[1px] border-[#E8BF38]" />

        <div className="py-32 flex flex-col gap-20">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative">
              <h1 className=" w-auto font-OutFit text-4xl font-bold  text-black">
                Let's Work Together
              </h1>
              {/* absolute component */}
              <div className="absolute w-[39px] h-[39px] z-50 left-80 bottom-6 g">
                <img
                  className="w-[39px] h-[39px] object-contain"
                  src={lines}
                  alt="lines"
                />
              </div>
            </div>
            <img src={star} className="hidden md:block" alt="a star" />
            <button className="font-OutFit text-white rounded-full font-medium px-[51px] py-[10px] bg-[#E8BF38] hover:shadow-lg">
              Let's Talk
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <ul className="flex flex-col md:flex-row gap-[24px] md:gap-[49px]">
                {links.map((item, i) => (
                  <li
                    className="text-[rgba(0,0,0,0.40)] font-OutFit cursor-pointer hover:text-[#E8BF38] transition-all duration-300 ease-in-out"
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6 pt-16 md:pt-0 text-[rgba(0,0,0,0.40)]">
              <p>Ph:+971 50 537 7349</p>
              <p>mail:karthikkap121@gmail.com</p>
            </div>
          </div>
        </div>

        <hr className="h-4 text-black w-full" />

        <div className="flex flex-col gap-7 md:flex-row py-10 justify-between text-[rgba(0,0,0,0.40)] font-OutFit">
          <p>KarthikRaj</p>
          <p>© 2024 Karthik Raj. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link>
              <img className="w-8 h-8 " src={instagram} alt="instagram icon" />
            </Link>
            <Link>
              <img className="w-8 h-8 " src={discord} alt="discord icon" />
            </Link>
            <Link>
              <img className="w-8 h-8 " src={twitter} alt="twitter icon" />
            </Link>
            <Link>
              <img className="w-8 h-8 " src={facebook} alt="facebook icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
