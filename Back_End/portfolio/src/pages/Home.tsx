import Banner from "../components/Banner";
import TechSkills from "../components/TechSkills";
import SoftSkills from "../components/SoftSkills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Internship from "../components/Internship";

const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      <Banner />
      <TechSkills />
      <Internship />
      <Projects />
      <Certificates />
      <Education />
      <Contact />

    </div>
  );
};

export default Home;