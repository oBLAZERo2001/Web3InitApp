import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Recipients() {
  return (
    <Box sx={{}}>
      <Box sx={{ mt: 2, fontSize: "24px", fontWeight: "500" }}>
        recipients and amounts
      </Box>
      <Box sx={{ mt: 2 }}>
        enter one address and amount in NEO on each line, supports any format
      </Box>
      <TextField
        sx={{ mt: 2 }}
        multiline
        minRows={4}
        variant="filled"
        //   value={name}
        onChange={(e) => {
          console.log({ A: e.target.value });
        }}
        fullWidth
      />
    </Box>
  );
}
