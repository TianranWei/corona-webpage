import React, { Component } from 'react';
import { Cards, CountryPicker, Chart } from './components';

import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {
	state = {
		data: {},
		country: ''
	};
	async componentDidMount() {
		// default fetch when there is no country selection
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		console.log(country);
		console.log(fetchedData)
		this.setState({ data: fetchedData, country: country });

	};

	// isEmpty = function() {
	// 	for(var key in this) {
	// 		if(this.hasOwnProperty(key))
	// 			return false;
	// 	}
	// 	return true;
	// }

	render() {
		// while(this.isEmpty(this.state.data)|| this.state.dailyData.length==0){
		// 	continue;
		// }
		const { data,country } = this.state;
		return (
			<div className={styles.container}>
				<Cards data={data}/>
				<CountryPicker handleCountryChange = {this.handleCountryChange}/>
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
