import skillCircle from "../assets/skillscircle.png";
import skillTriangle from "../assets/skilltriangles.png";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import js from "../assets/skills/js.svg";
import react from "../assets/skills/react.svg";
import node from "../assets/skills/Nodejs.svg";
import mongodb from "../assets/skills/mongodb.svg";
import wordpress from "../assets/skills/wordpress.svg";
import tailwind from "../assets/skills/tailwind.svg";
import postgres from "../assets/skills/postgres.svg";
import firebase from "../assets/skills/firebase.svg";
import figma from "../assets/skills/figma.svg";
import git from "../assets/skills/github.svg";

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-[#0C1426] z-20 relative">
      <div className="section-container">
        <p className="text-center pt-5 font-OutFit font-medium text-lg text-[#E8BF38]">
          Skills.
        </p>
        <hr className="w-24 mx-auto border-[1px] border-[#E8BF38]" />
        <h1 className="text-center font-OutFit text-3xl md:text-4xl font-bold py-6 text-white">
          Technologies I've Worked With
        </h1>
        {/* content */}
        <div className="py-20 flex items-center justify-center gap-20 flex-wrap">
          <img src={html} alt="html5" />
          <img src={css} alt="css3" />
          <img src={js} alt="javascript" />
          <img src={react} alt="react js" />
          <img src={node} alt="Node Js" />
          <img src={mongodb} alt="mongodb" />
          <img src={tailwind} alt="tailwind css" />
          <img src={postgres} alt="postgresql" />
          <img src={wordpress} alt="wordpress" />
          <img src={firebase} alt="firebase" />
          <img src={figma} alt="figma" />
          <img src={git} alt="github" />
        </div>
      </div>
      <img className="absolute bottom-0" src={skillCircle} alt="circle" />
    </div>
  );
};
export default Skills;
