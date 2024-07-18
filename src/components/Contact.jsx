import contactline from "../assets/contactline.png";
import footerimg from "../assets/footerimage.svg";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-[#0C0C26] relative">
      <div className="section-container">
        <p className="text-center pt-5 font-OutFit font-medium text-lg text-[#E8BF38]">
          Contact.
        </p>
        <hr className="w-24 mx-auto border-[1px] border-[#E8BF38]" />
        <h1 className="text-center font-OutFit text-4xl font-bold py-6 text-white">
          Shoot Me An Email
        </h1>
        {/* content */}
        <div className="flex justify-around">
          <img src={footerimg} alt="footer image" className="" />
          <form
            method="POST"
            action="https://getform.io/f/bb107b3e-10a1-4903-b4ca-b53e911c5536"
            className="flex flex-col max-w-[600px] w-full mt-16"
          >
            <input
              className="font-realtor bg-[#ccd6f6] p-2"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="font-realtor my-4 p-2 bg-[#ccd6f6]"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="font-realtor bg-[#ccd6f6] p-2"
              name="message"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="text-white  font-OutFit border-2 hover:border-[#E8BF38] bg-[#E8BF38] hover:text-black px-4 py-3 my-8 flex justify-center items-center">
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
      <img className="absolute bottom-0 right-0" src={contactline} alt="line" />
    </div>
  );
};
export default Contact;
