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

	let result = dailyData.map(({ confirmed }) => confirmed);
	let deaths = dailyData.map(({ deaths }) => deaths);
	let date = dailyData.map(({ date }) => date);
	console.log(result);

	const lineChart = (
		<Line
			data={{
				lables: [1,2,3,4,5,6],
				datasets: [
					{
						data: [10000,20000,30000,40000,50000,60000],
						label: 'Infected',
						borderColor: '#3333ff',
						fill: true
					},
					{
						data: [1000,2000,3000,4000,50000,60000],
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(225,0,0,0.5)',
						fill: true
					}
				]
			}}
		/>
	);
	// ctx = document.getElementById("Chart1").getContext("2d");
	// var lineChart = new Chart(ctx, {
	// 	type: 'line',
	// 	data: data,
	//   });

	return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
