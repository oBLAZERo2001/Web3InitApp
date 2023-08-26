import { Box } from "@mui/system";
import React from "react";

export default function Header() {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <Box
        sx={{
          width: "50px",
          heigth: "50px",
        }}
      >
        <img src="/logo.svg.png" alt="" srcset="" width="100%" heigth="100%" />
      </Box>
      <Box sx={{ ml: 2, fontSize: "25px" }}>Neo Disperse</Box>
    </Box>
  );
}
