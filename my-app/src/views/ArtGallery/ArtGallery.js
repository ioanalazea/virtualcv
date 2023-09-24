import { useEffect, useState } from "react";
//Import style:
import { Box, Typography } from "@mui/material";

import Project1 from "./works/Project1";
import Project2 from "./works/Project2";
import Project3 from "./works/Project3";

function ArtGallery() {
  return (
    <Box
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography
        style={{
          fontFamily: "Monotype Corsiva",
          fontWeight: "700",
          fontSize: "30px",
          background: "white",
          borderRadius: "10px 10px 40px 40px",
          paddingRight: "30px",
          paddingLeft: "30px",
          boxShadow: "0px 5px 42px -7px #505050",
          margin: "20px",
        }}
      >
        Ioana's Creative Coding virtual art gallery
      </Typography>
      <Project1 />
      <Project2/>
      <Project3/>
    </Box>
  );
}

export default ArtGallery;
