import { Box } from "@mui/system";
import React from "react";
import Web3 from "web3";

export default function Holdings({ holding, symbol }) {
  return (
    <Box
      sx={{
        mt: 2,
        fontSize: "18px",
      }}
    >
      you have {Web3.utils.fromWei(holding)} {symbol}
    </Box>
  );
}
