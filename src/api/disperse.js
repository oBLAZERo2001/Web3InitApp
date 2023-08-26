import { default as axios } from "axios";
import { SERVER_URL } from "../constants";

export const createDisperse = async function (disperseString, token) {
	try {
		const address = localStorage.getItem("address");
		const response = await axios.post(
			SERVER_URL + "/disperse",
			{ address, disperseString, token },
			{
				headers: {
					"Content-Type": `application/json`,
				},
			}
		);
		if (response.status === 2000) {
			return response.data;
		}
	} catch (error) {
		console.log(error.message);
	}
};

export const getDisperse = async function () {
	try {
		const address = localStorage.getItem("address");
		const response = await axios.get(SERVER_URL + "/disperse/" + address);
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error.message);
	}
};
