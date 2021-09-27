import { GOOGLE_API_KEY, SHEET_ID } from '../../../variables';

export async function get() {
	const key = GOOGLE_API_KEY;
	const id = SHEET_ID;
	const ranges = 'Data';
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values&key=${key}`;
	// const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values:batchGet?${ranges}&key=${key}`;
	console.log(key);
	console.log(url);

	try {
		survey = await fetch(url);
		console.log(survey);
		// sheets = survey.sheets;
		// console.log(sheets[0].data[0].rowData);
		// console.log(sheets[0].data[0].rowData[13].values[1].userEnteredValue.stringValue);
	} catch (e) {
		console.log(e);
	}
	// you can pass the `articles` via props like that
	return {
		props: {
			survey
		}
	};
}
