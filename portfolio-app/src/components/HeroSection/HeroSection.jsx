import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { mainImg, bg1 } from "../smallComponents/images";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: `url('${bg1}') no-repeat center center / 100% 100%`,
        py: 10,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={mainImg} alt="MainImg" height={250} width={200} />
        </Box>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              textShadow: "0px 0px 13.37690258026123px rgba(0, 0, 0, 0.25)",
              fontFamily: "Roboto",
              fontSize: { xs: "40px", md: "66px" },
              fontStyle: "normal",
              color: "rgb(97, 218, 251)",
              fontWeight: "800",
              lineHeight: "100.5%",
              letterSpacing: "1.92px",
              //   opacity: "0.86",
              //   backdropFilter: "blur(2.824876308441162px)",
              //   background: `url('${bg2}') no-repeat center center / 100% 100%`,
              // "-webkit-linear-gradient(45deg, #42a5f5 30%, #f44336 90%)",
              // background:
              //   "linear-gradient(249deg, rgba(2,0,36,1) 0%, #b2ebf2 100%, #80deea 100%)",
              // WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent",
            }}
          >
            Hi! Its me Usman <br /> I'm a
            <Typewriter
              words={[
                " WebDeveloper.",
                " Web Designer.",
                " Programmer.",
                " Frontend Developer.",
                " Backend Developer.",
              ]}
              loop={0}
            />
          </Typography>
          <Typography
            mt={1}
            variant="h6"
            sx={{
              color: "#fafafa",
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Oswald",
            }}
          >
            Contact me for work with
            <Typewriter
              words={[" Quality.", " Accuraccy.", " dedication."]}
              loop={0}
            />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
