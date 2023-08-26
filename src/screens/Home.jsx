import "../App.css";
import React from "react";
// import { Navbar } from "../components/Navbar";
import { Box } from "@mui/system";
import Header from "../components/HomeComponents.jsx/Header";
import SubText from "../components/HomeComponents.jsx/SubText";
import Selector from "../components/HomeComponents.jsx/Selector";
import { useState } from "react";
import Recipients from "../components/HomeComponents.jsx/Recipients";
import Token from "../components/HomeComponents.jsx/Token";
import { disperseNative, disperseToken } from "../utils/disperse";
import { createDisperse } from "../api/disperse";
import { getBalance, getWalletAddress, switchChain } from "../utils/wallet";
import { split } from "../utils/split";
import DisperseInterface from "../contracts/Disperse.json";
import ERC20Interface from "../contracts/ERC20.json";
import Web3 from "web3";
import { CONTRACT_ADDRESS } from "../constants";
import MainBox from "../components/HomeComponents.jsx/MainBox";
import Holdings from "../components/HomeComponents.jsx/Holdings";
import { useEffect } from "react";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("neo");
  // neo| token
  // console.log("neoRecipients :", neoRecipients, "token :", token);

  const [respResult, setRespResult] = useState([]);
  const [tokenResult, setTokenResult] = useState();

  const [holding, setHolding] = useState();

  useEffect(() => {
    setRespResult([]);
    const fun = async () => {
      const result = await getBalance();
      console.log(result);
      if (result) setHolding(result);
    };
    if (selected === "neo") fun();
    else setHolding();
  }, [selected]);

  async function disperseNative(addressList) {
    await switchChain();
    const web3 = new Web3(window.ethereum);

    const { addArray, amtArray, total } = split(addressList);

    const contract = new web3.eth.Contract(
      DisperseInterface.abi,
      CONTRACT_ADDRESS
    );
    const currentAddress = await getWalletAddress();

    // Gas Calculation
    const gasPrice = await web3.eth.getGasPrice();
    const gas = await contract.methods
      .disperseEther(addArray, amtArray) // change 2 to price taken from field
      .estimateGas({
        from: currentAddress,
        value: Web3.utils.toWei(total.toString()),
      });

    await contract.methods
      .disperseEther(addArray, amtArray) // change 2 to price taken from field
      .send({
        from: currentAddress,
        gasPrice,
        gas,
        value: Web3.utils.toWei(total.toString()),
      })
      .on("transactionHash", function (hash) {
        setLoading(true);
      })
      .on("receipt", async function (receipt) {
        // Get token address
        // toast("Dispersed", { type: "success" });
        createDisperse(
          addressList,
          "0xf8099D14f36CBADCb99a84C460F5e44992FdB5f9"
        );
        setLoading(false);
        // await new Promise((res, rej) => {
        // 	setTimeout(() => {
        // 		window.location.reload();
        // 	}, 3000);
        // });
      });
  }

  return (
    <Box
      className="App"
      sx={{
        my: "10vh",
        // mx: "10vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <Navbar /> */}
      {/* body */}
      <Box
        sx={{
          //   fontFamily: `et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif`,
          width: "80vw",
          maxWidth: "80vw",
        }}
      >
        <Header />
        <SubText />
        <Selector selected={selected} setSelected={setSelected} />

        {holding !== null && holding !== undefined && (
          <Holdings holding={holding} unit={"neo"} symbol={"neo"} />
        )}
        {/* ! set 1 */}
        {selected === "neo" && holding !== null && holding !== undefined && (
          <Recipients setRespResult={setRespResult} />
        )}
        {/* ! set 2 */}
        {selected === "token" && <Token setTokenResult={setTokenResult} />}
        {/* ! set 2 */}
        {tokenResult?.balance !== null &&
          tokenResult?.balance !== undefined && (
            <Holdings
              holding={tokenResult.balance}
              symbol={tokenResult.symbol}
              unit={tokenResult.name}
            />
          )}

        {selected === "token" &&
          tokenResult?.balance !== null &&
          tokenResult?.balance !== undefined && (
            <Recipients setRespResult={setRespResult} />
          )}
        <Box
          onClick={async () => {
            let addList = `0x314ab97b76e39d63c78d5c86c2daf8eaa306b182 0.0141592
					0x271bffabd0f79b8bd4d7a1c245b7ec5b576ea98a, 0.027182
					0x141ca95b6177615fb1417cf70e930e102bf8f584: 0.031421`;
            selected
              ? disperseNative(addList)
              : disperseToken(
                  "0xf8099D14f36CBADCb99a84C460F5e44992FdB5f9",
                  addList
                );
          }}
          sx={{
            cursor: "pointer",
          }}
        >
          Disperse
        </Box>
        {/* last section */}
        {respResult?.length > 0 && (
          <MainBox
            respResult={respResult}
            symbol={
              selected === "neo"
                ? "neo"
                : tokenResult?.symbol
                ? tokenResult.symbol
                : ""
            }
            unit={
              selected === "neo"
                ? "neo"
                : tokenResult?.name
                ? tokenResult.name
                : ""
            }
          />
        )}
      </Box>
    </Box>
  );
};
