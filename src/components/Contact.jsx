import contactline from "../assets/contactline.png";
import footerimg from "../assets/footerimage.svg";

const Contact = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="section-container"></div>
      <img className="absolute bottom-0 right-0" src={contactline} alt="line" />
    </div>
  );
};
export default Contact;
