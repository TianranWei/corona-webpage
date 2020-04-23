// functions to fetch data

import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// async: a function always returns a promise.
// Other values are wrapped in a resolved promise automatically.
export const fetchData = async () => {
	try {
		// The keyword await makes JavaScript wait until that
		// promise settles and returns its result.
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
		const modifiedData = {
			confirmed,
			recovered,
			deaths,
			lastUpdate
		};
		return modifiedData;
	} catch (error) {}
};

export const fetchDailyData = async() =>{
	try {
		const {data} = await axios.get(`${url}/daily/?_limit=10`);
		
		const modifiedData = data.map((dailyData) => ({
			confirmed : dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			data: dailyData.reportDate,
		}));
		console.log(modifiedData)
		return modifiedData;
	} catch (error) {
		
	}
}