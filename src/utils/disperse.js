import { getWalletAddress, switchChain } from "./wallet";
import DisperseInterface from "../contracts/Disperse.json";
import ERC20Interface from "../contracts/ERC20.json";
import { CONTRACT_ADDRESS } from "../constants";
import Web3 from "web3";
import { split } from "./split";
const web3 = new Web3(window.ethereum);

export async function disperseToken(tokenAddress, addressList) {
  await switchChain();
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
    });
}

export async function loadToken(tokenAddress) {
  await switchChain();
  const contract = new web3.eth.Contract(ERC20Interface.abi, tokenAddress);
  const currentAddress = await getWalletAddress();
  let name = await contract.methods
    .name() // change 2 to price taken from field
    .call();
  let symbol = await contract.methods
    .symbol() // change 2 to price taken from field
    .call();

  let balance = await contract.methods
    .balanceOf(currentAddress) // change 2 to price taken from field
    .call();

  return { name, symbol, balance };
}

export async function allowToken(tokenAddress, addressList) {
  await switchChain();
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
    .on("receipt", async function (receipt) {});
}
