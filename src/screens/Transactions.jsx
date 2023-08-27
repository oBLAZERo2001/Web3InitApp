import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { getDisperse } from "../api/disperse";
import { useState } from "react";
import Web3 from "web3";
import { split } from "../utils/split";
import Header from "../components/HomeComponents.jsx/Header";
export const Transactions = () => {
	const [transactions, setTransactions] = useState([]);

	async function gD() {
		const data = await getDisperse();
		let Trans = [];
		if (data?.length > 0) {
			data.forEach((d, i) => {
				console.log(i, d.disperseString);
				const resultSplit = split(d.disperseString);
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
					Trans.push(arr);
				}
			});
		}
		setTransactions(Trans);
	}

	useEffect(() => {
		// Get all transactions
		gD();
	}, []);
	console.log(transactions);

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
			<Box
				sx={{
					//   fontFamily: et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif,
					width: "80vw",
					maxWidth: "80vw",
				}}
			>
				<Header />
				<Box sx={{ mt: 2 }}>
					<h1>Transactions 🚀</h1>
					<Box sx={Cstyle.row}>
						<Box>address</Box>
						<Box>amount</Box>
					</Box>
					<Box
						sx={{
							width: "80vw",
						}}
					>
						{transactions?.length > 0 &&
							transactions.map((data, i) => (
								<Box
									sx={{
										my: 1,
										border: "1px solid gray",
										borderRadius: "10px",
										p: 2,
									}}
									key={i}
								>
									{data?.length > 0 &&
										data.map((data, i) => (
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
													<hr />
												</Box>
												<Box
													sx={{
														whiteSpace: "nowrap",
													}}
												>
													{Web3.utils.fromWei(data.amount)}

													<span style={{ marginLeft: "5px", fontSize: "18px" }}>
														{/* {data.unit} */}neo
													</span>
												</Box>
											</Box>
										))}
								</Box>
							))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

const Cstyle = {
	row: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		mt: 2,
		// fontFamily: 'Bilbo Swash Caps', cursive,
		fontFamily: "Petit Formal Script",

		fontSize: "20px",
		fontWeight: "500",
	},
};
