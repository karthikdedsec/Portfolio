import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Works from "../components/Works";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Skills />
      <Works />
      <Experience />
      <Contact />
    </div>
  );
};
export default Home;
