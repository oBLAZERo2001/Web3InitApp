import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Trasfer from "./Trasfer";

export default function MainBox() {
  const Values = [
    {
      address: "0x64a871919cff66af7d77aeb89ce367a31af61604",
      amount: "0.0001",
      unit: "CELO",
    },
    {
      address: "0x64a871919cff66af7d77aeb89ce367a31af61604",
      amount: "0.0001",
      unit: "CELO",
    },
  ];

  const Result = [
    {
      title: "total",
      amount: "0.64235978213467",
      unit: "CELO",
    },
    {
      title: "your balance",
      amount: "0.9876580965",
      unit: "CELO",
    },
    {
      title: "remaining",
      amount: "0.8o67593457",
      unit: "CELO",
    },
  ];
  return (
    <Box sx={{}}>
      <Box
        sx={{
          fontSize: "22px",
          fontWeight: "600",
          //   fontFamily: `'Bilbo Swash Caps', cursive`,
          fontfamily: `'Petemoss', cursive`,
        }}
      >
        Confirm
      </Box>
      <Box sx={Cstyle.row}>
        <Box>address</Box>
        <Box>amount</Box>
      </Box>
      <Box
        sx={{
          width: "80vw",
        }}
      >
        {Values?.length > 0 &&
          Values.map((data) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                mt: 2,
                fontSize: "22px",
              }}
            >
              <Box>{data.address}</Box>
              <Box sx={{ flex: "1 0", ml: 2, mr: 2 }}>
                {/* <Divider /> */}
                <hr />
              </Box>
              <Box
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                {data.amount}
                <span style={{ marginLeft: "5px", fontSize: "18px" }}>
                  {data.unit}
                </span>
              </Box>
            </Box>
          ))}
        {Result?.length > 0 &&
          Result.map((data) => (
            <Box sx={Cstyle.row}>
              <Box>{data.title}</Box>
              <Box sx={{ flex: "1 0", ml: 2, mr: 2 }}>
                <Divider />
              </Box>
              <Box
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                {data.amount}
                <span
                  style={{
                    marginLeft: "5px",
                    fontSize: "18px",
                    fontFamily: `"Inter Tight", sans-serif`,
                    fontWeight: "400",
                  }}
                >
                  <i>{data.unit}</i>
                </span>
              </Box>
            </Box>
          ))}
        <Trasfer
          onClick={() => {}}
          // complted| pendeing
          status="pendeing"
          id={"0x64a871919cff66af7d77aeb89ce367a31af61604"}
        />
      </Box>
    </Box>
  );
}

const Cstyle = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    mt: 2,
    // fontFamily: `'Bilbo Swash Caps', cursive`,
    fontFamily: `'Petit Formal Script', cursive`,
    fontSize: "20px",
    fontWeight: "500",
  },
};
