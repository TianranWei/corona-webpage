// import axios from 'axios';

// const url = 'https://covid19.mathdro.id/api';

// export const fetchData = async (country) => {
//   let changeableUrl = url;

//   if (country) {
//     changeableUrl = `${url}/countries/${country}`;
//   }

//   try {
//     const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

//     return { confirmed, recovered, deaths, lastUpdate };
//   } catch (error) {
//     return error;
//   }
// };

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${url}/daily`);

//     return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
//   } catch (error) {
//     return error;
//   }
// };

// export const fetchCountries = async () => {
//   try {
//     const { data: { countries } } = await axios.get(`${url}/countries`);

//     return countries.map((country) => country.name);
//   } catch (error) {
//     return error;
//   }
// };




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

export const fetchDailyData = async () => {
	try {
	  const { data } = await axios.get(`${url}/daily`);
  
	  return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
	} catch (error) {
	  return error;
	}
  };