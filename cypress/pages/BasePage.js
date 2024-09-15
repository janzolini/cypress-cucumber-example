const basePage = {

	returnDataTableObject: dataTable => {
		const forLength = dataTable.rawTable.length || 0;
		const data = [];
		let i;
		for (i = 1; i < forLength; i++) {
			const item = {};
			dataTable.rawTable[0].forEach((value, index) => {
				item[value] = dataTable.rawTable[i][index];
			});
			data.push(item);
		}
		cy.log(data);
		return data;
	}

}
export default basePage;