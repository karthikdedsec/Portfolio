import Heroimg from "../assets/mysection.png";
import ArrowLeft from "../assets/arrow1.svg";
import ArrowRight from "../assets/arrow2.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div ref={ref} className="w-full bg-[#0C1426] pb-1 md:pb-24">
      <div className="section-container">
        <div className="flex md:flex-row flex-col-reverse gap-5 items-center justify-around py-10">
          {/* experience on mobile screen */}
          <div className="md:hidden flex flex-row justify-between  pt-16 w-full text-white">
            <div className="w-24 flex flex-col items-center text-center">
              <div className="flex gap-1 items-center">
                <CountUp
                  end={2}
                  duration={5}
                  className="text-2xl font-OutFit font-bold"
                  start={inView ? 0 : 2}
                />
                <p className="text-2xl font-OutFit font-bold">+</p>
              </div>
              <p className="text-xs">Years of experience</p>
            </div>
            <div className="w-24 flex flex-col items-center text-center">
              <div className="flex gap-1 items-center">
                <CountUp
                  end={100}
                  duration={5}
                  className="text-2xl font-OutFit font-bold"
                  start={inView ? 0 : 100}
                />
                <p className="text-2xl font-OutFit font-bold">%</p>
              </div>
              <p className="text-xs">Satisfied Clients</p>
            </div>
            <div className="w-24 flex flex-col items-center text-center">
              <div className="flex gap-1 items-center">
                <CountUp
                  end={34}
                  duration={5}
                  className="text-2xl font-OutFit font-bold"
                  start={inView ? 0 : 34}
                />
                <p className="text-2xl font-OutFit font-bold">+</p>
              </div>
              <p className="text-xs">Projects</p>
            </div>
          </div>
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-[460px] space-y-12"
          >
            <h1 className="font-OutFit text-white text-3xl md:text-[28px] lg:text-[38px] font-bold leading-[47px]">
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
              <button className="font-OutFit text-sm md:text-base font-medium px-[51px] py-[10px] bg-[#E8BF38] hover:shadow-lg">
                <Link to="#work">View Work</Link>
              </button>
              <button className="font-OutFit text-sm md:text-base font-medium px-[51px] py-[10px] border-2 border-[#E8BF38] text-white hover:bg-[#E8BF38] hover:text-black transform transition-all duration-500 ease-in-out">
                <Link to="#contact">Get in Touch</Link>
              </button>
            </div>
          </motion.div>
          {/* Image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
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
          </motion.div>

          {/* experience */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="hidden md:flex flex-col space-y-14 text-white"
          >
            <div className="w-24 flex flex-col items-center text-center">
              <div className="flex gap-1 items-center">
                <CountUp
                  end={2}
                  duration={5}
                  className="text-2xl font-OutFit font-bold"
                  start={inView ? 0 : 2}
                />
                <p className="text-2xl font-OutFit font-bold">+</p>
              </div>
              <p className="text-xs">Years of experience</p>
            </div>
            <div className="w-24 flex flex-col items-center text-center">
              <div className="flex gap-1 items-center">
                <CountUp
                  end={100}
                  duration={5}
                  className="text-2xl font-OutFit font-bold"
                  start={inView ? 0 : 100}
                />
                <p className="text-2xl font-OutFit font-bold">%</p>
              </div>
              <p className="text-xs">Satisfied Clients</p>
            </div>
            <div className="w-24 flex flex-col items-center text-center">
              <div className="flex gap-1 items-center">
                <CountUp
                  end={34}
                  duration={5}
                  className="text-2xl font-OutFit font-bold"
                  start={inView ? 0 : 34}
                />
                <p className="text-2xl font-OutFit font-bold">+</p>
              </div>
              <p className="text-xs">Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
