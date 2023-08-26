import { Box } from "@mui/system";
import React from "react";

export default function Holdings({ holding, symbol }) {
  return (
    <Box
      sx={{
        mt: 2,
        fontSize: "18px",
      }}
    >
      you have {holding} {symbol}
    </Box>
  );
}
