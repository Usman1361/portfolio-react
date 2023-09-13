import { Box } from "@mui/material";
import React from "react";

const ColorItem = ({ color, setColors }) => {
  const handleClick = () => {
    setColors(color);
  };
  return (
    <Box
      variant="button"
      sx={{
        width: "3rem",
        height: "3rem",
        backgroundColor: color,
        borderRadius: "50%",
      }}
      onClick={handleClick}
    ></Box>
  );
};

export default ColorItem;
