import Heroimg from "../assets/herologos.png";

const Hero = () => {
  return (
    <div className="w-full bg-[#0C1426]">
      <div className="section-container">
        <div className="flex gap-[223px] items-center py-10">
          {/* text */}
          <div className="w-[510px] space-y-9">
            <h1 className="font-OutFit text-white text-[38px] font-bold leading-[47px]">
              HI, Iam{" "}
              <span className="text-[#E8BF38] text-[43px]">Karthik Raj</span>{" "}
              Iam a UI/UX Designer and full stack Developer
            </h1>
            <p className="text-[rgba(255,255,255,0.70)]">
              Iam a Fullstack Developer specializing in building exceptional
              digital experiences currently iam focused on building responsive
              web applications.
            </p>
            <div className="flex gap-9">
              <button className="font-OutFit font-medium px-[51px] py-[10px] bg-[#E8BF38] hover:shadow-lg hover:text-white">
                View Work
              </button>
              <button className="font-OutFit font-medium px-[51px] py-[10px] border-2 border-[#E8BF38] text-white hover:bg-[#E8BF38] hover:text-black">
                Get in Touch
              </button>
            </div>
          </div>
          {/* Image */}
          <div>
            <img
              className="w-[520px] h-[620px] object-contain"
              src={Heroimg}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
