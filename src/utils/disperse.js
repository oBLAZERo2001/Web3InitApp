import { getWalletAddress, switchChain } from "./wallet";
import ERC20Interface from "../contracts/ERC20.json";
import Web3 from "web3";
const web3 = new Web3(window.ethereum);


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
