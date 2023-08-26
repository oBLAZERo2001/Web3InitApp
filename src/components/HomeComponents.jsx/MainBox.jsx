import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Trasfer from "./Trasfer";
import Web3 from "web3";
import { getWalletAddress, switchChain } from "../../utils/wallet";
import { createDisperse } from "../../api/disperse";

import { split } from "../../utils/split";
import DisperseInterface from "../../contracts/Disperse.json";
import ERC20Interface from "../../contracts/ERC20.json";
import { CONTRACT_ADDRESS } from "../../constants";

export default function MainBox({ respResult: Values, neoRecipients, token }) {
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState("");
	const [trx_id, setTrx_id] = useState("");
	// const Values = [
	//   {
	//     address: "0x64a871919cff66af7d77aeb89ce367a31af61604",
	//     amount: "0.0001",
	//     unit: "CELO",
	//   },
	//   {
	//     address: "0x64a871919cff66af7d77aeb89ce367a31af61604",
	//     amount: "0.0001",
	//     unit: "CELO",
	//   },
	// ];

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
				setState("pending");
				setTrx_id(hash);
			})
			.on("receipt", async function (receipt) {
				createDisperse(addressList, token);
				setState("success");
				setLoading(false);
			});
	}

	async function disperseToken(tokenAddress, addressList) {
		await switchChain();
		const web3 = new Web3(window.ethereum);

		let { addArray, amtArray } = split(addressList);

		const contract = new web3.eth.Contract(
			DisperseInterface.abi,
			CONTRACT_ADDRESS
		);
		const currentAddress = await getWalletAddress();

		// Gas Calculation
		console.log(addArray, amtArray);
		const gasPrice = await web3.eth.getGasPrice();
		const gas = await contract.methods
			.disperseToken(tokenAddress, addArray, amtArray) // change 2 to price taken from field
			.estimateGas({
				from: currentAddress,
			});

		return contract.methods
			.disperseToken(tokenAddress, addArray, amtArray) // change 2 to price taken from field
			.send({
				from: currentAddress,
				gasPrice,
				gas,
			})
			.on("transactionHash", function (hash) {
				setLoading(true);
				setState("pending");
				setTrx_id(hash);
			})
			.on("receipt", async function (receipt) {
				createDisperse(addressList, token);
				setState("success");
				setLoading(false);
			});
	}

	async function allowToken(tokenAddress, addressList) {
		await switchChain();
		const web3 = new Web3(window.ethereum);
		const { total } = split(addressList);

		const contract = new web3.eth.Contract(ERC20Interface.abi, tokenAddress);
		const currentAddress = await getWalletAddress();

		// Gas Calculation
		const gasPrice = await web3.eth.getGasPrice();
		const gas = await contract.methods
			.approve(CONTRACT_ADDRESS, Web3.utils.toWei(total.toString())) // change 2 to price taken from field
			.estimateGas({
				from: currentAddress,
			});

		await contract.methods
			.approve(CONTRACT_ADDRESS, Web3.utils.toWei(total.toString())) // change 2 to price taken from field
			.send({
				from: currentAddress,
				gasPrice,
				gas,
			})
			.on("transactionHash", function (hash) {})
			.on("receipt", async function (receipt) {
				await disperseToken(token, neoRecipients);
			});
	}

	const Result = [
		{
			title: "total",
			amount: "0.64235978213467",
		},
		{
			title: "your balance",
			amount: "0.9876580965",
		},
		{
			title: "remaining",
			amount: "0.8o67593457",
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
				{Values &&
					Values.map((data, i) => (
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",

								mt: 2,
								fontSize: "22px",
							}}
							key={i}
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
								{/* {data.amount} */}
								{Web3.utils.fromWei(data.amount)}

								<span style={{ marginLeft: "5px", fontSize: "18px" }}>
									{data.unit}
								</span>
							</Box>
						</Box>
					))}
				{Result?.length > 0 &&
					Result.map((data, i) => (
						<Box sx={Cstyle.row} key={i}>
							<Box>{data.title}</Box>
							<Box sx={{ flex: "1 0", ml: 2, mr: 2 }}>
								<Divider />
							</Box>
							<Box
								sx={{
									whiteSpace: "nowrap",
								}}
							>
								{/* {Web3?.utils?.fromWei(data.amount)} */}
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
					onClick={() => {
						console.log(token);
						!token || token === ""
							? disperseNative(neoRecipients)
							: allowToken(token, neoRecipients);
					}}
					// success| pendeing
					//   status="pendeing"
					status={state}
					id={trx_id}
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
