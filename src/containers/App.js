import React from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state ={
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response  => response.json())
        .then(users => this.setState({robots: users}))
    }

    render() {
        const { robots, searchField } = this.state
        if (robots.length === 0) { return <h2>Loading...</h2> }
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (robots.length === 0) { return <h2>Loading...</h2> }
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