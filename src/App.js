import React from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox'
import './App.css'
import {robots} from './robots'

class App extends React.Component {
    constructor() {
        super()
        this.state ={
            robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
            
        )
    }
}

export default App