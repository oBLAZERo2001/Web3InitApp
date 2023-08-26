import "../App.css";
import React from "react";
// import { Navbar } from "../components/Navbar";
import { Box } from "@mui/system";
import Header from "../components/HomeComponents.jsx/Header";
import SubText from "../components/HomeComponents.jsx/SubText";
import Selector from "../components/HomeComponents.jsx/Selector";
import { useState } from "react";
import Recipients from "../components/HomeComponents.jsx/Recipients";
import Token from "../components/HomeComponents.jsx/Token";

export const Home = () => {
  const [selected, setSelected] = useState("neo");
  const [neoRecipients, setNeoRecipients] = useState("");
  const [token, setToken] = useState("");
  // neo| token
  console.log("neoRecipients :", neoRecipients, "token :", token);
  const holding = "76.4697";

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
        <Selector
          selected={selected}
          setSelected={setSelected}
          holding={holding}
        />
        {/* <MainBox /> */}
        {selected === "neo" && (
          <Recipients
            neoRecipients={neoRecipients}
            setNeoRecipients={setNeoRecipients}
          />
        )}
        {selected === "token" && <Token token={token} setToken={setToken} />}
      </Box>
    </Box>
  );
};
