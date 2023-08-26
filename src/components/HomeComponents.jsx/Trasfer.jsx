import { Box } from "@mui/system";
import React from "react";

export default function Trasfer({ onClick, status, id }) {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Disperse onClick={onClick} />
        <Box sx={{ ml: 4, mt: 3 }}>
          <Box sx={{ color: status === "success" ? "#15d100" : "gray" }}>
            {status}
          </Box>
          <Box sx={{ mt: 0.5 }}>
            <u>{id}</u>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const Disperse = ({ onClick }) => {
  return (
    <Box
      sx={{
        p: 2,
        backgroundImage: `linear-gradient(to right top, #edff74, #ffd968, #ffb47e, #ff98a1, #ff8cc3, #e79ae2, #c7a9f6, #a4b7ff, #7dcbff, #53deff, #41eeff, #5ffbf1)`,
        color: "white",
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
          backgroundImage: `linear-gradient(to right top, #5ffbf1, #41eeff, #53deff, #7dcbff, #a4b7ff, #c7a9f6, #e79ae2, #ff8cc3, #ff98a1, #ffb47e, #ffd968, #edff74)`,
          cursor: "pointer",
          boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
        },
      }}
      onClick={onClick}
    >
      Disperse token
    </Box>
  );
};
