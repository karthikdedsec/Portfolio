import { BiRightArrowAlt } from "react-icons/bi";
import circleleft from "../assets/circleleft.svg";
import blackDots from "../assets/blackdots.svg";
import webDev from "../assets/webdevelopment.svg";
import webDes from "../assets/uiux.svg";
import wordpress from "../assets/wordpress.svg";
import lines from "../assets/lines.png";

const Services = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="section-container">
        <p className="text-center pt-5 font-OutFit font-medium text-lg text-[#E8BF38]">
          Services.
        </p>
        <hr className="w-24 mx-auto border-2 border-[#E8BF38]" />
        <div className="relative w-80 h-28 mx-auto">
          <h1 className="text-center font-OutFit text-3xl md:text-4xl font-bold py-6 w-fit mx-auto">
            What I'm Offering
          </h1>
          {/* absolute component */}
          <img
            className="absolute z-50 top-0 -right-7"
            src={lines}
            alt="lines"
          />
        </div>
        {/* content */}
        <div className="flex justify-around gap-9 flex-wrap py-20">
          <div className="w-[328px] h-[396px] bg-[#0C1426] rounded-xl shadow-custom">
            <div className="py-4 flex flex-col space-y-24 justify-center items-center">
              <img className="" src={webDev} alt="web development icon" />
              <h2 className="text-3xl text-white font-OutFit font-medium">
                Web Development
              </h2>
              <div className="flex items-center gap-1">
                <p className="text-[#fff] font-OutFit cursor-pointer hover:text-[#E8BF38] transition-all duration-300 ease-in-out">
                  Read more
                </p>
                <BiRightArrowAlt className="text-white text-lg hover:text-[#E8BF38] transition-all duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          <div className="w-[328px] h-[396px] bg-[#0C1426] rounded-xl shadow-custom">
            <div className="py-4 flex flex-col space-y-24 justify-center items-center">
              <img className="" src={webDes} alt="web designing icon" />
              <h2 className="text-3xl text-white font-OutFit font-medium">
                Web Designing
              </h2>
              <div className="flex items-center gap-1">
                <p className="text-[#fff] font-OutFit cursor-pointer hover:text-[#E8BF38] transition-all duration-300 ease-in-out">
                  Read more
                </p>
                <BiRightArrowAlt className="text-white text-lg hover:text-[#E8BF38] transition-all duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          <div className="w-[328px] h-[396px] bg-[#0C1426] rounded-xl shadow-custom">
            <div className="py-4 flex flex-col space-y-20 justify-center items-center">
              <img className="" src={wordpress} alt="wordpress icon" />
              <h2 className="text-3xl text-white text-center font-OutFit font-medium">
                Wordpress Development
              </h2>
              <div className="flex items-center gap-1 ">
                <p className="text-[#fff] font-OutFit cursor-pointer hover:text-[#E8BF38] transition-all duration-300 ease-in-out">
                  Read more
                </p>
                <BiRightArrowAlt className="text-white text-lg hover:text-[#E8BF38] transition-all duration-300 ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="absolute left-0 top-0" src={circleleft} alt="circle" />
      <img
        className="absolute -right-16 -bottom-28"
        src={blackDots}
        alt="dots"
      />
    </div>
  );
};
export default Services;
