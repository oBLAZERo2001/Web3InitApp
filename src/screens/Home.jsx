import "../App.css";
import React from "react";
// import { Navbar } from "../components/Navbar";
import { Box } from "@mui/system";
import Header from "../components/HomeComponents.jsx/Header";
import SubText from "../components/HomeComponents.jsx/SubText";
import MainBox from "../components/HomeComponents.jsx/MainBox";

export const Home = () => {
  return (
    <Box
      className="App"
      sx={{
        my: "10vh",
        // mx: "10vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <Navbar /> */}
      {/* body */}
      <Box
        sx={{
          //   fontFamily: `et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif`,
          width: "80vw",
          maxWidth: "80vw",
        }}
      >
        <Header />
        <SubText />
        <MainBox />
      </Box>
    </Box>
  );
};
