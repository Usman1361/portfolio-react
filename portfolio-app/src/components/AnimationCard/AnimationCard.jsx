import { Box, Typography } from "@mui/material";
import React from "react";
import Tilt from "react-parallax-tilt";
const AnimationCard = (props) => {
  return (
    <Tilt tiltAxis="x" tiltMaxAngleX="30">
      <Box
        height={{ xs: 270, md: 250 }}
        width={{ xs: 320, md: 400 }}
        sx={{
          borderRadius: "12px",
          backgroundColor: "#263238",
          boxShadow: "-3px -1px 12px 3px rgb(97, 218, 251)",
          cursor: "pointer",
        }}
      >
        <Box pt={1} sx={{ color: props.color, textAlign: "center" }}>
          <props.icon fontSize="5rem" />
        </Box>
        <Box>
          <Typography
            mt={1}
            variant="h5"
            sx={{
              color: props.color,
              textAlign: "center",
              fontFamily: "Borel",
            }}
          >
            {props.title}
          </Typography>
          <Typography
            mt={1}
            p={1}
            variant="body2"
            sx={{
              color: "white",
              fontFamily: "Roboto",
              textAlign: "center",
              "&:hover": {
                color: props.color,
              },
            }}
          >
            {props.detail}
          </Typography>
        </Box>
      </Box>
    </Tilt>
  );
};

export default AnimationCard;
