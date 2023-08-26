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
            color: selected === "neo" ? "blue" : "grey",
            bgcolor: selected === "neo" ? "rgba(245, 245, 245, 0.7)" : "",
            px: "2px",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            mx: 1,
            "&:hover": {
              color: "black",
              cursor: "pointer",
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
            color: selected === "token" ? "blue" : "grey",
            bgcolor: selected === "token" ? "rgba(245, 245, 245, 0.7)" : "",
            px: "2px",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            mx: 1,
            "&:hover": {
              color: "black",
              cursor: "pointer",
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
