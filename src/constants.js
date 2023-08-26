export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const ChainsConfig = {
	NEO_EVM: {
		chainId: 2970385,
		chainName: "NeoEVM Chain",
		nativeCurrency: { name: "GAS", symbol: "GAS", decimals: 18 },
		rpcUrls: ["https://evm.ngd.network:32332"],
		blockExplorerUrls: ["https://evm.ngd.network/"],
	},
	POLYGON_TESTNET: {
		chainId: 80001,
		rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
		chainName: "Polygon Testnet",
		nativeCurrency: {
			name: "tMATIC",
			symbol: "tMATIC",
			decimals: 18,
		},
		blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
	},
};

export const CONTRACT_ADDRESS = "0x8E6AaCa450Bbb89816D4e8BD6D5FD8C2Aec8D479";
