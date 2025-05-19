import skillCircle from "../assets/skillscircle.png";
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
import shopify from "../assets/skills/shopify.svg";
import git from "../assets/skills/github.svg";
import redux from "../assets/skills/redux.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
  return (
    <div id="skills" className="w-full min-h-screen bg-[#0C1426] z-20 relative">
      <div className="section-container">
        <p className="text-center pt-5 font-OutFit font-medium text-lg text-[#E8BF38]">
          Skills.
        </p>
        <hr className="w-24 mx-auto border-[1px] border-[#E8BF38]" />
        <h1 className="text-center font-OutFit text-3xl md:text-4xl font-bold py-6 text-white">
          Technologies I've Worked With
        </h1>
        {/* content */}
        <div className="py-20 flex justify-center">
          <div className="grid xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-10">
            <motion.img
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={html}
              alt="html5"
            />
            <motion.img
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={css}
              alt="css3"
            />
            <motion.img
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={js}
              alt="javascript"
            />
            <motion.img
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={react}
              alt="react js"
            />
            <motion.img
              variants={fadeIn("left", 1.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={node}
              alt="Node Js"
            />
            <motion.img
              variants={fadeIn("left", 1.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={mongodb}
              alt="mongodb"
            />
            <motion.img
              variants={fadeIn("left", 1.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={tailwind}
              alt="tailwind css"
            />
            <motion.img
              variants={fadeIn("left", 1.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={postgres}
              alt="postgresql"
            />
            <motion.img
              variants={fadeIn("left", 2.0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={wordpress}
              alt="wordpress"
            />
            <motion.img
              variants={fadeIn("left", 2.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={firebase}
              alt="firebase"
            />
            <motion.img
              variants={fadeIn("left", 2.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={figma}
              alt="figma"
            />
            <motion.img
              variants={fadeIn("left", 2.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={git}
              alt="github"
            />
            <motion.img
              variants={fadeIn("left", 2.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={redux}
              alt="redux"
            />
            <motion.img
              variants={fadeIn("left", 2.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={shopify}
              alt="shopify"
            />
          </div>
        </div>
      </div>
      <img className="absolute bottom-0" src={skillCircle} alt="circle" />
    </div>
  );
};
export default Skills;
