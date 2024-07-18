import workcircle from "../assets/workcircle.png";
import workdots from "../assets/workdots.png";
import skynet from "../assets/works/skynet.png";

const Works = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div className="section-container">
        <p className="text-center pt-5 font-OutFit font-medium text-lg text-[#E8BF38]">
          Works.
        </p>
        <hr className="w-24 mx-auto border-[1px] border-[#E8BF38]" />
        <h1 className="text-center font-OutFit text-4xl font-bold py-6 text-black">
          My Recent Works
        </h1>
        {/* grid */}
        <div className="grid grid-cols-3 gap-10">
          <div className="w-[358px] h-[193px] bg-[#D9D9D9] rounded-lg overflow-hidden">
            <img
              src={skynet}
              className="object-contain"
              alt="skynet group of companies"
            />
          </div>
          <div className="w-[358px] h-[193px] bg-[#D9D9D9] rounded-lg overflow-hidden">
            <img
              src={skynet}
              className="object-contain"
              alt="skynet group of companies"
            />
          </div>
          <div className="w-[358px] h-[193px] bg-[#D9D9D9] rounded-lg overflow-hidden">
            <img
              src={skynet}
              className="object-contain"
              alt="skynet group of companies"
            />
          </div>
          <div className="w-[358px] h-[193px] bg-[#D9D9D9] rounded-lg overflow-hidden">
            <img
              src={skynet}
              className="object-contain"
              alt="skynet group of companies"
            />
          </div>
          <div className="w-[358px] h-[193px] bg-[#D9D9D9] rounded-lg overflow-hidden">
            <img
              src={skynet}
              className="object-contain"
              alt="skynet group of companies"
            />
          </div>
          <div className="w-[358px] h-[193px] bg-[#D9D9D9] rounded-lg overflow-hidden">
            <img
              src={skynet}
              className="object-contain"
              alt="skynet group of companies"
            />
          </div>
        </div>
      </div>
      <img className="absolute -top-40 right-0" src={workcircle} alt="circle" />
      <img className="absolute -bottom-36 left-0" src={workdots} alt="dots" />
    </div>
  );
};
export default Works;
