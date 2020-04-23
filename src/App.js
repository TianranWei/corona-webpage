import React, { Component } from 'react';
// import { Cards, Country } from './components';
import Chart from './components/Chart/Chart';
import Country from './components/Country/Country';
import Cards from './components/Cards/Cards';

import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {
	state = {
		data: {}
	};
	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}

	isEmpty = function() {
		for(var key in this) {
			if(this.hasOwnProperty(key))
				return false;
		}
		return true;
	}

	render() {
		while(this.isEmpty(this.state.data)){
			continue;
		}
		const {data} = this.state;
		return (
			<div className={styles.container}>
				<Cards data={data} isEmpty={this.isEmpty}/>
				<Country />
				<Chart />
			</div>
		);
	}
}

export default App;
