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
          <div className="max-w-sm mx-auto">
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400x300" // Replace with your project image
                alt="Project Thumbnail"
                className="w-full h-48 object-cover rounded-lg transition duration-500 ease-in-out group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                <div className="space-x-4">
                  <a
                    href="#view"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    View
                  </a>
                  <a
                    href="#code"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400x300" // Replace with your project image
                alt="Project Thumbnail"
                className="w-full h-48 object-cover rounded-lg transition duration-500 ease-in-out group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                <div className="space-x-4">
                  <a
                    href="#view"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    View
                  </a>
                  <a
                    href="#code"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400x300" // Replace with your project image
                alt="Project Thumbnail"
                className="w-full h-48 object-cover rounded-lg transition duration-500 ease-in-out group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                <div className="space-x-4">
                  <a
                    href="#view"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    View
                  </a>
                  <a
                    href="#code"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400x300" // Replace with your project image
                alt="Project Thumbnail"
                className="w-full h-48 object-cover rounded-lg transition duration-500 ease-in-out group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                <div className="space-x-4">
                  <a
                    href="#view"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    View
                  </a>
                  <a
                    href="#code"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400x300" // Replace with your project image
                alt="Project Thumbnail"
                className="w-full h-48 object-cover rounded-lg transition duration-500 ease-in-out group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                <div className="space-x-4">
                  <a
                    href="#view"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    View
                  </a>
                  <a
                    href="#code"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400x300" // Replace with your project image
                alt="Project Thumbnail"
                className="w-full h-48 object-cover rounded-lg transition duration-500 ease-in-out group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                <div className="space-x-4">
                  <a
                    href="#view"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    View
                  </a>
                  <a
                    href="#code"
                    className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="absolute -top-40 right-0" src={workcircle} alt="circle" />
      <img className="absolute -bottom-36 left-0" src={workdots} alt="dots" />
    </div>
  );
};
export default Works;
