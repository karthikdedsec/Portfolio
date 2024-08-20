import RoundArrow from "../assets/roundarrow.svg";
import lines from "../assets/lines.png";

const Experience = () => {
  return (
    <div className="min-h-screen bg-[#0C0C26]">
      <div className="section-container">
        <p className="text-center pt-5 font-OutFit font-medium text-lg text-[#E8BF38]">
          Experience.
        </p>
        <hr className="w-24 mx-auto border-[1px] border-[#E8BF38]" />
        {/* content */}
        <div className="flex flex-col gap-3 md:flex-row justify-between mt-5 pt-24">
          {/* experience */}
          <div className="flex flex-col w-[444px] gap-14">
            <div className="relative">
              <h1 className=" w-auto font-OutFit text-3xl md:text-4xl font-bold  text-white">
                My Experience
              </h1>
              {/* absolute component */}
              <div className="absolute z-50 left-64 bottom-6">
                <img src={lines} alt="lines" />
              </div>
            </div>
            <p className="text-[rgba(255,255,255,0.70)] text-sm md:text-base leading-9">
              Web developer with expertise in the MERN stack and PostgreSQL.
              Skilled in building responsive, user-friendly websites and
              managing projects from concept to deployment.
            </p>
            <button className="font-OutFit font-medium px-[51px] py-[10px] border-2 border-[#E8BF38] text-white hover:bg-[#E8BF38] hover:text-black transform transition-all duration-500 ease-in-out w-52">
              Download CV
            </button>
            <div className="ml-14 ">
              <img
                className="w-[96px] h-[131px] object-contain"
                src={RoundArrow}
                alt=""
              />
            </div>
          </div>
          {/* right */}
          <div className="flex gap-5 py-8">
            <div className="h-[444px] flex flex-col justify-between font-OutFit text-white text-nowrap text-base md:text-lg">
              <p>2024 - Now</p>
              <p className="pt-11">2023 - 2024</p>
              <p>2022 - 2023 </p>
            </div>
            <div>
              <svg
                width="20"
                height="444"
                viewBox="0 0 20 444"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#FFC727" />
                <circle cx="10" cy="245" r="10" fill="#FFC727" />
                <circle cx="10" cy="434" r="10" fill="#FFC727" />
                <line
                  x1="10.5"
                  y1="4"
                  x2="10.5"
                  y2="441"
                  stroke="#E8BF38"
                  strokeOpacity="0.7"
                />
              </svg>
            </div>
            <div className="space-y-5 md:space-y-8 ">
              <div className="">
                <h4 className="text-white text-wrap font-semibold text-lg md:text-xl font-OutFit">
                  Full Stack Developer at Link and Crosslink Technologies{" "}
                </h4>
                <p className="text-[rgba(255,255,255,0.70)] text-sm w-[290px] md:text-base md:w-[444px] text-wrap leading-5 md:leading-7">
                  developed two robust applications using React. The first is a
                  business application designed to streamline operations and
                  enhance productivity. The second is an e-commerce platform
                  focused on delivering a seamless shopping experience. Both
                  projects involved end-to-end development, from planning and
                  design to implementation and deployment.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg text-wrap md:text-xl font-OutFit">
                  Software Developer at Gofreelab Technologies
                </h4>
                <p className="text-[rgba(255,255,255,0.70)] text-sm w-[290px] md:text-base md:w-[444px] leading-5 md:leading-7">
                  Developed a real estate application using the MERN stack.
                  Managed the full development cycle, creating a scalable,
                  user-friendly platform for browsing and managing property
                  listings.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg text-wrap md:text-xl font-OutFit pt-8 sm:pt-20 md:pt-12">
                  Web Developer intern
                </h4>
                <p className="text-[rgba(255,255,255,0.70)] text-sm md:text-base w-[290px] md:w-[444px] leading-5 md:leading-7">
                  Worked on real-time projects, gaining hands-on experience in
                  web development and contributing to live applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
