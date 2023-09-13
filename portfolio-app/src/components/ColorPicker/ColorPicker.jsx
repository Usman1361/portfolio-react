import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ColorItem from "../ColorItem/ColorItem";
import SettingsIcon from "@mui/icons-material/Settings";

const ColorPicker = () => {
  const colors = ["#121212", "green", "blue", "orange"];
  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color", color);
  };
  const setColors = (event) => {
    const currentColor = window
      .getComputedStyle(event.target)
      .getPropertyValue("background-color");
    setTheme(currentColor);
    console.log(currentColor);
  };

  return (
    <Box
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
  );
};

export default ColorPicker;
