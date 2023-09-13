import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import RoadSection from "./components/RoadmapSection/RoadSection";
import SkillCard from "./components/SkillCard/SkillCard";
import Loading from "./components/smallComponents/Loading";
import Footer from "./components/Footer";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { Box, Button, Typography } from "@mui/material";
// import ColorItem from "./components/ColorItem/ColorItem";
// import Test from "./components/Test";

function App() {
  const [loader, setLoader] = useState(false);
  // const [coloropen, SetColorOpen] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  // const colors = ["#b2ebf2", "green", "blue", "orange"];
  // const setTheme = (color) => {
  //   document.documentElement.style.setProperty("--bg-color", color);
  // };

  // const setColors = (color) => {
  //   setTheme(color);
  //   console.log(color);
  // };
  return (
    <>
      <Loading loading={loader} />
      {/* <Box
        sx={{
          backgroundColor: "white",
          width: "10rem",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translate(0,-50%)",
        }}
      >
        <Button
          sx={{
            display: coloropen ? "none" : "block",
            width: "3rem",
            height: "3rem",
            backgroundColor: "#fff",
            border: "none",
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translate(100%,-50%)",
            color: "red",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
          onClick={() => SetColorOpen(!coloropen)}
        >
          <SettingsIcon />
        </Button>
        <Box sx={{ display: coloropen ? "block" : "none" }}>
          <Button
            sx={{
              width: "3rem",
              height: "3rem",
              backgroundColor: "#fff",
              border: "none",
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translate(-100%,-50%)",
              color: "red",
              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
            onClick={() => SetColorOpen(!coloropen)}
          >
            <SettingsIcon />
          </Button>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            Select Color
          </Typography>
          <Box
            mt={1}
            ml={2}
            mb={1}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "1rem",
            }}
          >
            {colors.map((value, index) => (
              <ColorItem color={value} setColors={setColors} />
            ))}
          </Box>
        </Box>
      </Box> */}
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
