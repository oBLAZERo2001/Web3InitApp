import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { loadToken } from "../../utils/disperse";
import { useState } from "react";

export default function Token({ setTokenResult }) {
  const [token, setToken] = useState("");

  return (
    <Box>
      <Box
        sx={{
          fontSize: "24px",
          fontWeight: "500",
        }}
      >
        token address
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "80vw",
        }}
      >
        <TextField
          size="small"
          variant="filled"
          fullWidth
          sx={{ maxWidth: "70%" }}
          value={token}
          onChange={(e) => {
            setToken(e.target.value);
          }}
        />
        <Box
          sx={loadButton}
          onClick={async () => {
            if (token) {
              const result = await loadToken(token);
              console.log(">>>>>>", result);
              setTokenResult(result);
            }
          }}
        >
          load
        </Box>
      </Box>
    </Box>
  );
}

const loadButton = {
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

  //   mt: 2,
  ml: 4,

  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",

  "&:hover": {
    backgroundImage: `linear-gradient(to right top, #a8eb12, #00de86, #00c4dd, #009fff, #1d6de5)`,
    cursor: "pointer",
    boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
  },
};
