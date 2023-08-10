import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import RoadSection from "./components/RoadmapSection/RoadSection";
import SkillCard from "./components/SkillCard/SkillCard";
import Loading from "./components/smallComponents/Loading";
import Footer from "./components/Footer";
// import Test from "./components/Test";

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      <Loading loading={loader} />

      <Header />
      <section id="about">
        <HeroSection />
      </section>
      <section id="skill">
        <RoadSection />
      </section>
      <section id="work">
        <SkillCard />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <Footer />
    </>
  );
}

export default App;
