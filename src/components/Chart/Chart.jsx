import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';


const Chart = ({ dailyData: { confirmed, recovered, deaths } , country }) => {
	const [dailyData, setDailyData] = useState({});
  
	useEffect(() => {
	  const fetchMyAPI = async () => {
		const initialDailyData = await fetchDailyData();
  
		setDailyData(initialDailyData);
	  };
  
	  fetchMyAPI();
	}, []);


	const barChart = (
		confirmed ? (
		  <Bar
			data={{
			  labels: ['Infected', 'Recovered', 'Deaths'],
			  datasets: [
				{
				  label: 'People',
				  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
				  data: [confirmed.value, recovered.value, deaths.value],
				},
			  ],
			}}
			options={{
			  legend: { display: false },
			  title: { display: true, text: `Current state in ${country}` },
			}}
		  />
		) : null
	  );

	const lineChart = (
		dailyData[0] ? (
		  <Line
			data={{
			  labels: dailyData.map(({ date }) => date),
			  datasets: [{
				data: dailyData.map((data) => data.confirmed),
				label: 'Infected',
				borderColor: '#3333ff',
				fill: true,
			  }, {
				data: dailyData.map((data) => data.deaths),
				label: 'Deaths',
				borderColor: 'red',
				backgroundColor: 'rgba(255, 0, 0, 0.5)',
				fill: true,
			  },
			  ],
			}}
		  />
		) : null
	  );
	
	  return (
		<div className={styles.container}>
		  { lineChart}
		</div>
	  );
	};
	
	export default Chart;






// const Chart = ({ dailyData }) => {
// 	while (!dailyData.length) {
// 		return 'Loading....';
// 	}
// 	console.log(dailyData);

// 	let result = dailyData.map(({ confirmed }) => confirmed);
// 	let deaths = dailyData.map(({ deaths }) => deaths);
// 	let date = dailyData.map(({ date }) => date);
// 	console.log(result);

// 	const lineChart = (
// 		<Line
// 			data={{
// 				lables: [1,2,3,4,5,6],
// 				datasets: [
// 					{
// 						data: [10000,20000,30000,40000,50000,60000],
// 						label: 'Infected',
// 						borderColor: '#3333ff',
// 						fill: true
// 					},
// 					{
// 						data: [1000,2000,3000,4000,50000,60000],
// 						label: 'Deaths',
// 						borderColor: 'red',
// 						backgroundColor: 'rgba(225,0,0,0.5)',
// 						fill: true
// 					}
// 				]
// 			}}
// 		/>
// 	);
// 	// ctx = document.getElementById("Chart1").getContext("2d");
// 	// var lineChart = new Chart(ctx, {
// 	// 	type: 'line',
// 	// 	data: data,
// 	//   });

// 	return <div className={styles.container}>{lineChart}</div>;
// };

// export default Chart;
