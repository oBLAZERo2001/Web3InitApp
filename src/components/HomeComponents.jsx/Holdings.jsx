import { Box } from "@mui/system";
import React from "react";

export default function Holdings({ holding }) {
  return (
    <Box
      sx={{
        mt: 2,
        fontSize: "18px",
      }}
    >
      you have {holding} NEO
    </Box>
  );
}
