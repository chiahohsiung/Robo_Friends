import React, { Component }from "react"
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots'

// PROP static
// STATE dynamic
// parent   child
// state -> prop

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		// change the state of App
		// change state.searchfield
		this.setState({ searchfield: event.target.value })
		// change state.robots
		
		// console.log(filteredRobots);
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
			</div>
			);
	}
}

export default App;