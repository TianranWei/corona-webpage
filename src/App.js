import React, { Component } from 'react';
// import { Cards, Country } from './components';
import Chart from './components/Chart/Chart';
import Country from './components/Country/Country';
import Cards from './components/Cards/Cards';

import styles from './App.module.css';
import { fetchData, fetchDailyData } from './api';

class App extends Component {
	state = {
		data: {},
		dailyData: {}
	};
	async componentDidMount() {
		const fetchedData = await fetchData();
		const fetchedDailyData = await fetchDailyData();
		this.setState({ data: fetchedData });
		this.setState({dailyData:fetchedDailyData})
	}



	isEmpty = function() {
		for(var key in this) {
			if(this.hasOwnProperty(key))
				return false;
		}
		return true;
	}

	render() {
		while(this.isEmpty(this.state.data)|| this.state.dailyData.length==0){
			continue;
		}
		const {data, dailyData} = this.state;
		return (
			<div className={styles.container}>
				<Cards data={data} isEmpty={this.isEmpty}/>
				<Country />
				<Chart dailyData = {dailyData}/>
				
			</div>
		);
	}
}

export default App;
