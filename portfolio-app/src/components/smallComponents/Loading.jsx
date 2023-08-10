import React from "react";
import { Backdrop } from "@mui/material";
import { FidgetSpinner } from "react-loader-spinner";
function Loading({ loading }) {
  return (
    <>
      <Backdrop
        sx={{ backgroundColor: "black", zIndex: 220000000 }}
        open={loading}
      >
        <FidgetSpinner
          visible={true}
          height="180"
          width="180"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#ffeb3b", "#0000ff"]}
          backgroundColor="#263238"
        />
      </Backdrop>
    </>
  );
}

export default Loading;
