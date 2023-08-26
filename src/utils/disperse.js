import { getWalletAddress, switchChain } from "./wallet";
import DisperseInterface from "../contracts/Disperse.json";
import { CONTRACT_ADDRESS } from "../constants";
import Web3 from "web3";
import { split } from "./split";
const web3 = new Web3(window.ethereum);

export async function disperseNative(addressList) {
	await switchChain();
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
			// setStatus(3);
		})
		.on("receipt", async function (receipt) {
			// Get token address
			// toast("Dispersed", { type: "success" });
			// await new Promise((res, rej) => {
			// 	setTimeout(() => {
			// 		window.location.reload();
			// 	}, 3000);
			// });
		});
}
