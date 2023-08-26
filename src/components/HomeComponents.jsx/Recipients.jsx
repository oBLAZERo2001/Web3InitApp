import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { split } from "../../utils/split";
import { useState } from "react";

export default function Recipients({ setRespResult }) {
  const [neoRecipients, setNeoRecipients] = useState("");
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
        size="small"
        multiline
        minRows={4}
        variant="filled"
        value={neoRecipients}
        onChange={(e) => {
          setNeoRecipients(e.target.value);
          const resultSplit = split(e.target.value);
          if (
            resultSplit?.addArray?.length > 0 &&
            resultSplit?.amtArray?.length > 0
          ) {
            let arr = [];
            resultSplit.addArray.forEach((add, i) => {
              if (add && resultSplit.amtArray[i])
                arr.push({
                  address: add,
                  amount: resultSplit.amtArray[i],
                });
            });
            setRespResult(arr);
            console.log(arr);
          }
        }}
        fullWidth
      />
    </Box>
  );
}
