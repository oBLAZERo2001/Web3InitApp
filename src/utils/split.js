const UNIT = 1000000000000000000;

export function split(t) {
	try {
		let tempArray = t.split(/[\s,;:\t\r\n]+/);

		let oddArray = tempArray.filter((v, i) => i % 2);
		let evenArray = tempArray.filter((v, i) => !(i % 2));

		let addArray = [];
		let amtArray = [];

		let total = 0.0;

		for (let i = 0; i < evenArray.length; ++i) {
			if (!isNaN(oddArray[i]) && parseFloat(oddArray[i]) > 0.0) {
				addArray.push(evenArray[i].trim());
				amtArray.push((oddArray[i] * UNIT).toString());
				total += parseFloat(oddArray[i]);
			}
		}

		return { addArray, amtArray, total };
	} catch (e) {
		console.log(e);
	}
}
