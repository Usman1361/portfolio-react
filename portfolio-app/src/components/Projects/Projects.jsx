import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
const Projects = (props) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });
  if (inView && !animationStarted) {
    setAnimationStarted(true);
    // Add code here to start GIF animation
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      height={400}
      width={{ xs: 320, sm: 370, md: 400 }}
      sx={{
        backgroundColor: "#263238",
        // border: "2px solid #cfd8dc",
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        ref={ref}
        className="scroll-trigger"
        height={300}
        width={{ xs: 320, sm: 370, md: 400 }}
        sx={{
          overflow: "hidden",
          borderRadius: "16px 16px 0 0",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={props.gif}
          alt="Auto-playing GIF"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.5s ease",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ color: "white", mb: 1, textAlign: "center" }}
        >
          {props.title}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#66bb6a",
            mb: 1,
            marginRight: "20px",
            borderRadius: "8px",
            "&:hover": {
              background: "#66bb6a",
            },
          }}
          href={props.viewLink}
        >
          <VisibilityIcon sx={{ marginRight: "10px" }} />
          View
        </Button>
        <Button
          variant="contained"
          href={props.gitLink}
          sx={{
            backgroundColor: "#4db6ac",
            borderColor: "#66bb6a",
            mb: 1,
            borderRadius: "8px",
            "&:hover": {
              background: "#4db6ac",
            },
          }}
        >
          <GitHubIcon sx={{ marginRight: "10px" }} />
          Code
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
