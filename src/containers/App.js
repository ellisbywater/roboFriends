import React from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import { connect } from 'react-redux'
import './App.css'

import { setSearchField } from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log(this.props.store)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response  => response.json())
        .then(users => this.setState({robots: users}))
    }

    render() {
        const { robots } = this.state
        const { searchField, onSearchChange } = this.props
        if (robots.length === 0) { return <h2>Loading...</h2> }
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (robots.length === 0) { return <h2>Loading...</h2> }
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry> 
                </Scroll>     
            </div>
            
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)