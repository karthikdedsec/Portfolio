import workcircle from "../assets/workcircle.png";
import workdots from "../assets/workdots.png";
import airtac from "../assets/works/airtac.jpg";
import greens from "../assets/works/greens.png";
import foodi from "../assets/works/foodi.png";
import skynet from "../assets/works/skynet.png";
import hermes from "../assets/works/hermeslegal.png";
import shopit from "../assets/works/shopit.png";

import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div className="section-container">
        <p className="text-center pt-5 font-OutFit font-medium text-lg text-[#E8BF38]">
          Works.
        </p>
        <hr className="w-24 mx-auto border-[1px] border-[#E8BF38]" />
        <h1 className="text-center font-OutFit text-3xl md:text-4xl font-bold py-6 text-black">
          My Recent Works
        </h1>
        <div className="flex justify-center">
          {/* grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9">
            <div className="w-80 h-52 relative">
              <img src={airtac} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">
                    Airtac Aviation Website
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    aviation website created using Reactjs tailwind css emailjs
                  </p>
                  <div className="flex  gap-2">
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Code
                    </Link>
                    <Link
                      to="https://airtacaviation.com"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Demo
                    </Link>
                    <Link
                      to="https://www.figma.com/design/QzQOsVuoJ8oYWWazP7ZMun/airtac?node-id=0-1&t=Svmy5lxb9jwP5bgI-1"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-52 relative">
              <img src={greens} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">
                    E-commerce application
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    E-commerce application created using react mongodb expressjs
                    and nodejs
                  </p>
                  <div className="flex  gap-2">
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Code
                    </Link>
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Demo
                    </Link>
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-52 relative">
              <img src={foodi} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">
                    food ordering application
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    e-commerce food ordering application created using React,
                    mongoDB, Expressjs and Nodejs
                  </p>
                  <div className="flex  gap-2">
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Code
                    </Link>
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Demo
                    </Link>
                    <Link
                      to="https://www.figma.com/design/Xn7ySTTBhi6gPbXiLNv6xT/Restaurant-Website-UI-Template-(Community)?node-id=0-1&t=Z4IMCnQozBiis9wv-1"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-52 relative">
              <img src={skynet} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">
                    Airtac Aviation Website
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    aviation website created using Reactjs tailwind css emailjs
                  </p>
                  <div className="flex  gap-2">
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Code
                    </Link>
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Demo
                    </Link>
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-52 relative">
              <img src={hermes} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">
                    Airtac Aviation Website
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    aviation website created using Reactjs tailwind css emailjs
                  </p>
                  <div className="flex  gap-2">
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Code
                    </Link>
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Demo
                    </Link>
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-52 relative">
              <img src={shopit} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">
                    Airtac Aviation Website
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    aviation website created using Reactjs tailwind css emailjs
                  </p>
                  <div className="flex  gap-2">
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Code
                    </Link>
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Demo
                    </Link>
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-9">
          <button className="font-OutFit font-medium px-[51px] py-[10px] border-2 border-[#E8BF38] text-black hover:bg-[#E8BF38] hover:text-black transform transition-all duration-500 ease-in-out">
            All Works
          </button>
        </div>
      </div>
      <img className="absolute -top-40 right-0" src={workcircle} alt="circle" />
      <img className="absolute -bottom-36 left-0" src={workdots} alt="dots" />
    </div>
  );
};
export default Works;
