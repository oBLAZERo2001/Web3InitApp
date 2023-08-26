import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";

export default function SubText() {
  const connectSite = () => {};
  useEffect(() => {
    connectSite();
  }, []);

  return (
    <Box
      sx={{
        mt: 4,
        p: 2,
      }}
    >
      verb distribute ether or tokens to multiple addresses
      {/* <Box sx={{ mt: 3 }}>Connect to wallet</Box> */}
      <Box
        sx={{
          p: 2,
          backgroundImage: `linear-gradient(to right top, #1d6de5, #009fff, #00c4dd, #00de86, #a8eb12)`,
          color: "white",
          //   borderRadius: "20px",
          fontSize: "20px",
          fontWeight: "600",
          width: "220px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          mt: 2,

          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",

          "&:hover": {
            backgroundImage: `linear-gradient(to right top, #a8eb12, #00de86, #00c4dd, #009fff, #1d6de5)`,
            cursor: "pointer",
            boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
          },
        }}
        onClick={connectSite}
      >
        Connect to Wallet
      </Box>
    </Box>
  );
}
