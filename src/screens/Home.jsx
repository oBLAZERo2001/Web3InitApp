import "../App.css";
import React from "react";
// import { Navbar } from "../components/Navbar";
import { Box } from "@mui/system";
import Header from "../components/HomeComponents.jsx/Header";

export const Home = () => {
  return (
    <Box
      className="App"
      sx={{
        p: 18,
        pt: 10,
      }}
    >
      {/* <Navbar /> */}
      {/* body */}
      <Box
        sx={
          {
            //   fontFamily: `et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif`,
          }
        }
      >
        <Header />
      </Box>
    </Box>
  );
};
