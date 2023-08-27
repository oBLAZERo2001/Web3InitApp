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
import { getBalance } from "../utils/wallet";
import MainBox from "../components/HomeComponents.jsx/MainBox";
import { useEffect } from "react";
import Holdings from "../components/HomeComponents.jsx/Holdings";

export const Home = () => {
	const [selected, setSelected] = useState("");
	// neo| token
	// console.log("neoRecipients :", neoRecipients, "token :", token);

	const [respResult, setRespResult] = useState([]);
	const [tokenResult, setTokenResult] = useState();

	const [neoRecipients, setNeoRecipients] = useState("");
	const [token, setToken] = useState("");

	const [holding, setHolding] = useState();

	useEffect(() => {
		setRespResult([]);
		setNeoRecipients("");
		setToken("");
		const fun = async () => {
			const result = await getBalance();
			console.log(result);
			if (result) setHolding(result);
		};
		if (selected === "neo") fun();
		else setHolding();
	}, [selected]);

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

				{selected === "neo" && holding !== null && holding !== undefined && (
					<Holdings holding={holding} unit={"neo"} symbol={"neo"} />
				)}
				{/* ! set 1 */}
				{selected === "neo" && holding !== null && holding !== undefined && (
					<Recipients
						neoRecipients={neoRecipients}
						setNeoRecipients={setNeoRecipients}
						setRespResult={setRespResult}
					/>
				)}
				{/* ! set 2 */}
				{selected === "token" && (
					<Token
						setTokenResult={setTokenResult}
						token={token}
						setToken={setToken}
					/>
				)}
				{/* ! set 2 */}
				{selected === "token" &&
					tokenResult?.balance !== null &&
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
						<Recipients
							neoRecipients={neoRecipients}
							setNeoRecipients={setNeoRecipients}
							setRespResult={setRespResult}
						/>
					)}
				{/* <Box
					onClick={async () => {}}
					sx={{
						cursor: "pointer",
					}}
				>
					Disperse
				</Box> */}
				{/* last section */}
				{respResult?.length > 0 && (
					<MainBox
						token={token}
						neoRecipients={neoRecipients}
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
