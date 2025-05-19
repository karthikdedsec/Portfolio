import workcircle from "../assets/workcircle.png";
import workdots from "../assets/workdots.png";
import airtac from "../assets/works/airtac.jpg";
import greens from "../assets/works/greens.png";
import ilai from "../assets/works/ilai.png";
import skynet from "../assets/works/skynet.png";
import hermes from "../assets/works/hermeslegal.png";
import shopit from "../assets/works/shopit.png";
import h360 from "../assets/works/h360.png";
import akleel from "../assets/works/akleel.png";
import kyma from "../assets/works/kyma.png";

import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div id="work" className="w-full min-h-screen relative overflow-hidden">
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
              <img src={h360} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">
                    Healthchecks360
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    Healthchecks360 a completely custom healthcare application
                    created with html , css , js , sass and php for backend
                  </p>
                  <div className="flex  gap-2">
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Code
                    </Link>
                    <Link
                      to="https://www.healthchecks360.com/"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Demo
                    </Link>
                    <Link
                      to="https://www.figma.com/design/m8KqC9gFSDVdX3SwQVupKu/Healthcare-360--Copy-?node-id=254-2&t=JRXU6vMoM0lsStqp-1"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-52 relative">
              <img src={airtac} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">
                    Airtac Aviation Website
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    aviation website created using Reactjs, tailwind, emailjs
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
                    E-commerce application created using react, mongodb,
                    expressjs and nodejs
                  </p>
                  <div className="flex  gap-2">
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Code
                    </Link>
                    <Link
                      to="https://www.greensintl.com/"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
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
              <img src={akleel} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">Al Akleel</h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    An Wordpress application created using elementor page
                    builder and block editor.
                  </p>
                  <div className="flex  gap-2">
                    <Link
                      to=""
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Code
                    </Link>
                    <Link
                      to="https://alakleel.com/"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Demo
                    </Link>
                    <Link
                      to=""
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-52 relative">
              <img src={ilai} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">
                    Ilai Sarai
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    Completely custom build shopify ecommerce platform
                  </p>
                  <div className="flex  gap-2">
                    <Link
                      to=""
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Code
                    </Link>
                    <Link
                      to="https://ilaisarai.com/"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Demo
                    </Link>
                    <Link
                      to=""
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-52 relative">
              <img src={kyma} className="object-cover w-80 h-52" alt="" />
              <div className="absolute w-80 h-52 bg-[#0C1426] opacity-0 hover:opacity-100 top-0 transition-all duration-300 ease-in-out">
                <div className="flex p-4 justify-between h-full flex-col items-center">
                  <h4 className="text-white font-OutFit text-2xl">My Kyma</h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    Customized shopify ecommerce platform
                  </p>
                  <div className="flex  gap-2">
                    <Link
                      to=""
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Code
                    </Link>
                    <Link
                      to="https://mykyma.com/"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Demo
                    </Link>
                    <Link
                      to=""
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
                    SkynetGroup Website
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    Skynet Group Of companies website created using Reactjs
                    tailwind css emailjs
                  </p>
                  <div className="flex  gap-2">
                    <Link
                      to="https://github.com/karthikdedsec/skynet"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
                      Code
                    </Link>
                    <Link
                      to="https://www.skynetgroup.ae/"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
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
                    Visa Consultancy Website
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    Fullstack visa and immigration consultancy website
                  </p>
                  <div className="flex  gap-2">
                    <Link className="border-2 border-[#E8BF38] text-white p-2">
                      Code
                    </Link>
                    <Link
                      to="https://hermeslegal.ae/"
                      className="border-2 border-[#E8BF38] text-white p-2"
                    >
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
                    Shopit Ecommerce application
                  </h4>
                  <p className="text-center text-[rgba(255,255,255,0.70)]">
                    e-commerce website created using React, MongoDB, Expressjs,
                    Nodejs and Redux
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
