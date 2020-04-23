import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

// export default function Chart() {
// 	// state={
//     dailyData: {}
// }
// const [ dailyData, setDailyData ] = useState([]);
// fetchedData =
// fetchedData = fetchDailyData()
// setDailyData(fetchedData);

// console.log(this.props)

// useEffect(() => {
// 	const fetchAPI = () => {

//         setDailyData(await fetchDailyData());
// 	};

// 	fetchAPI();
// });

// const lineChart = this.props.dailyData.length ?
// (
// 	<Line
// 		data={{
// 			lables: '',
// 			datasets: [
// 				{
// 					data: this.props.dailyData.map(({ confirmed }) => confirmed),
// 					label: 'Infected',
// 					borderColor: '#3333ff',
// 					fill: true,
// 				},
// 				{
// 					data: this.props.dailyData.map(({ deaths }) => deaths),
// 					label: 'Deaths',
// 					borderColor: 'red',
// 					backgroundColor: 'rgba(225,0,0,0.5)',
// 					fill: true,
// 				}
// 			]
// 		}}
// 	/>
// ) : null;

// 	return <div className={styles.container}>
//     </div>;
// }

const Chart = ({ dailyData }) => {
    while (!dailyData.length) {
		return 'Loading....';
    }
    console.log(dailyData);

	let result = dailyData.map(({confirmed})  => confirmed);
	let deaths = dailyData.map(({deaths})  => deaths);
	let date = dailyData.map(({ date }) => date);
	console.log(date)
	const lineChart = 
		<Line
			data={{
				lables: date,
				datasets: [
					{
						data: {result},
						label: 'Infected',
						borderColor: '#3333ff',
						fill: true,
					},
					{
						data: deaths,
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(225,0,0,0.5)',
						fill: true,
					}
				]
			}}
		/>


	return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
