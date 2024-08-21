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
        <div className="flex flex-col gap-3 justify-center items-center mt-5 pt-24">
          {/* experience */}
          <div className="flex flex-col md:w-[860px] gap-14">
            <div className="relative w-auto md:mx-auto">
              <h1 className=" w-auto font-OutFit text-3xl md:text-4xl font-bold  text-white">
                My Experience
              </h1>
              {/* absolute component */}
              <div className="absolute z-50 right-36 md:-right-8 bottom-6">
                <img src={lines} alt="lines" />
              </div>
            </div>
            <p className="text-[rgba(255,255,255,0.70)] text-sm md:text-base md:text-center leading-9">
              Web developer with expertise in the MERN stack and PostgreSQL.
              Skilled in building responsive, user-friendly websites and
              managing projects from concept to deployment.
            </p>
            <div className="md:flex md:justify-center md:items-center">
              <button className="font-OutFit font-medium px-[51px] py-[10px] border-2 border-[#E8BF38] text-white hover:bg-[#E8BF38] hover:text-black transform transition-all duration-500 ease-in-out w-52">
                Download CV
              </button>
            </div>
            <div className="md:ml-[340px]">
              <img
                className="w-[96px] h-[131px] object-contain"
                src={RoundArrow}
                alt=""
              />
            </div>
          </div>
          {/* right */}
          <div className="flex gap-5 py-8">
            {/* <div className="h-[444px] flex flex-col justify-between font-OutFit text-white text-nowrap text-base md:text-lg">
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
                <h4 className="text-white text-wrap font-semibold text-sm sm:text-lg md:text-xl font-OutFit">
                  Full Stack Developer at Link and Crosslink Technologies{" "}
                </h4>
                <p className="text-[rgba(255,255,255,0.70)] text-xs md:text-base sm:w-[290px] md:w-[444px] text-wrap leading-5 md:leading-7">
                  developed two robust applications using React. The first is a
                  business application designed to streamline operations and
                  enhance productivity. The second is an e-commerce platform
                  focused on delivering a seamless shopping experience. Both
                  projects involved end-to-end development, from planning and
                  design to implementation and deployment.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-lg text-wrap md:text-xl font-OutFit">
                  Software Developer at Gofreelab Technologies
                </h4>
                <p className="text-[rgba(255,255,255,0.70)] text-xs md:text-base sm:w-[290px] md:w-[444px] leading-5 md:leading-7">
                  Developed a real estate application using the MERN stack.
                  Managed the full development cycle, creating a scalable,
                  user-friendly platform for browsing and managing property
                  listings.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-lg text-wrap md:text-xl font-OutFit pt-8 sm:pt-20 md:pt-12">
                  Web Developer intern
                </h4>
                <p className="text-[rgba(255,255,255,0.70)] text-xs md:text-base sm:w-[290px] md:w-[444px] leading-5 md:leading-7">
                  Worked on real-time projects, gaining hands-on experience in
                  web development and contributing to live applications.
                </p>
              </div>
            </div> */}
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#E8BF38"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end lg:w-[450px]">
                  <time className="italic text-[#E8BF38] font-OutFit">
                    2024 - Now
                  </time>
                  <div className="text-lg font-semibold text-white font-OutFit">
                    Full Stack Developer at Link and Crosslink Technologies
                  </div>
                  <span className="text-[rgba(255,255,255,0.70)] text-sm">
                    developed two robust applications using React. The first is
                    a business application designed to streamline operations and
                    enhance productivity. The second is an e-commerce platform
                    focused on delivering a seamless shopping experience. Both
                    projects involved end-to-end development, from planning and
                    design to implementation and deployment.
                  </span>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#E8BF38"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10 lg:w-[450px]">
                  <time className="font-OutFit italic text-[#E8BF38]">
                    2023 - 2024
                  </time>
                  <div className="text-lg font-semibold text-white font-OutFit">
                    Software Developer at Gofreelab Technologies
                  </div>
                  <span className="text-[rgba(255,255,255,0.70)] text-sm">
                    Developed a real estate application using the MERN stack.
                    Managed the full development cycle, creating a scalable,
                    user-friendly platform for browsing and managing property
                    listings.
                  </span>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#E8BF38"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end lg:w-[450px]">
                  <time className="font-OutFit italic text-[#E8BF38]">
                    2022 - 2023
                  </time>
                  <div className="text-lg font-semibold text-white font-OutFit">
                    Web Developer intern
                  </div>
                  <span className="text-[rgba(255,255,255,0.70)] text-sm">
                    Worked on real-time projects, gaining hands-on experience in
                    web development and contributing to live applications.
                  </span>
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
