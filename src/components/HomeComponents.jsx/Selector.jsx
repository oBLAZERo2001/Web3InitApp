import { Box } from "@mui/system";
import React from "react";

export default function Selector({ selected, setSelected, holding }) {
  return (
    <Box sx={{ fontSize: "20px" }}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        Send
        <Box
          // component="u"
          sx={{
            color: "grey",
            mx: 1,
            "&:hover": {
              color: "black",
            },
          }}
          onClick={() => {
            setSelected("neo");
          }}
        >
          neo
        </Box>
        or
        <Box
          // component="u"
          sx={{
            color: "grey",
            mx: 1,
            "&:hover": {
              color: "black",
            },
          }}
          onClick={() => {
            setSelected("token");
          }}
        >
          token
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          fontSize: "18px",
        }}
      >
        you have {holding} NEO
      </Box>
    </Box>
  );
}
