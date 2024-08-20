import Heroimg from "/mysection.svg";
import ArrowLeft from "../assets/arrow1.svg";
import ArrowRight from "../assets/arrow2.svg";

const Hero = () => {
  return (
    <div className="w-full bg-[#0C1426] pb-24">
      <div className="section-container">
        <div className="flex md:flex-row flex-col-reverse gap-5 items-center justify-around py-10">
          {/* experience on mobile screen */}
          <div className="md:hidden flex flex-row justify-between w-full text-white">
            <div>
              <h1 className="text-2xl font-OutFit font-bold">2+</h1>
              <p className="text-sm">Years of experience</p>
            </div>
            <div>
              <h1 className="text-2xl font-OutFit font-bold">100%</h1>
              <p className="text-sm">satisfied results</p>
            </div>
            <div>
              <h1 className="text-2xl font-OutFit font-bold">34+</h1>
              <p className="text-sm">Projects</p>
            </div>
          </div>
          {/* text */}
          <div className="md:w-[460px] space-y-12">
            <h1 className="font-OutFit text-white text-[25px] md:text-[28px] lg:text-[38px] font-bold leading-[47px]">
              HI, Iam{" "}
              <span className="text-[#E8BF38] md:text-[28px] lg:text-[43px]">
                Karthik Raj
              </span>{" "}
              Iam a UI/UX Designer and full stack Developer
            </h1>
            <p className="text-[rgba(255,255,255,0.70)] text-sm md:text-base leading-9">
              Iam a Fullstack Developer specializing in building exceptional
              digital experiences currently iam focused on building responsive
              web applications.
            </p>
            <div className="flex gap-9">
              <button className="font-OutFit hidden md:block font-medium px-[51px] py-[10px] bg-[#E8BF38] hover:shadow-lg">
                View Work
              </button>
              <button className="font-OutFit font-medium px-[51px] py-[10px] border-2 border-[#E8BF38] text-white hover:bg-[#E8BF38] hover:text-black transform transition-all duration-500 ease-in-out">
                Get in Touch
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="relative">
            <div className="">
              <img
                className="w-[520px] h-[520px] object-contain"
                src={Heroimg}
                alt="Hero Image"
              />
            </div>
            <img className="absolute top-40" src={ArrowLeft} alt="arrow" />
            <img
              className="absolute bottom-24 right-0"
              src={ArrowRight}
              alt="arrow"
            />
          </div>

          {/* experience */}
          <div className="hidden md:flex flex-col space-y-14 text-white">
            <div>
              <h1 className="text-2xl font-OutFit font-bold">2+</h1>
              <p className="text-sm">Years of experience</p>
            </div>
            <div>
              <h1 className="text-2xl font-OutFit font-bold">100%</h1>
              <p className="text-sm">satisfied results</p>
            </div>
            <div>
              <h1 className="text-2xl font-OutFit font-bold">34+</h1>
              <p className="text-sm">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
