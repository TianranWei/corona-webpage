import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

export default function Chart() {
	// state={
	//     dailyData: {}
    // }
    
    // const [ dailyData, setDailyData ] = useState([]);
    // fetchedData = []
    // fetchedData = fetchDailyData()
    // setDailyData(fetchedData);
    
    state = {
		dailyData: {}
    };
    
	async componentDidMount() {
		const fetchedData = await fetchDailyData();
		this.setState({ dailyData: fetchedData });
	};
    



    
	// useEffect(() => {
	// 	const fetchAPI = () => {
            
    //         setDailyData(await fetchDailyData());
	// 	};

	// 	fetchAPI();
	// });

    // const lineChart = dailyData.length ? 
    // (
	// 	<Line
	// 		data={{
	// 			lables: '',
	// 			datasets: [
	// 				{
	// 					data: dailyData.map(({ confirmed }) => confirmed),
	// 					label: 'Infected',
	// 					borderColor: '#3333ff',
	// 					fill: true,
	// 				},
	// 				{
	// 					data: dailyData.map(({ deaths }) => deaths),
	// 					label: 'Deaths',
	// 					borderColor: 'red',
	// 					backgroundColor: 'rgba(225,0,0,0.5)',
	// 					fill: true,
	// 				}
	// 			]
	// 		}}
	// 	/>
    // ) : null;

    

	return <div className={styles.container}></div>;
}
