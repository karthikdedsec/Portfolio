import circleleft from "../assets/circleleft.svg";
import blackDots from "../assets/blackdots.svg";

const Services = () => {
  return (
    <div className="min-h-screen relative">
      <div className="section-container">
        <p className="text-center pt-5 font-OutFit font-medium text-lg text-[#E8BF38]">
          Services.
        </p>
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
