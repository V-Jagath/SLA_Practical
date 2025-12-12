import Banner from "../components/Banner";
import TechSkills from "../components/TechSkills";
import SoftSkills from "../components/SoftSkills";

const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      <Banner />
      <TechSkills />
      <SoftSkills />
    </div>
  );
};

export default Home;