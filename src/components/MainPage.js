import React, {Component} from 'react'
import Header from '../components/Header'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './MainPage.css'


class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots()
    }

    filterRobots = robots => {
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
    }

    render() {
        const { onSearchChange, robots, isPending } = this.props
        if (robots.length === 0) { return <h2>Loading...</h2> }
        return isPending
            ? <h1 className="tc">Loading... </h1>
            : (
                <div className='tc'>
                    <Header/>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots(robots)}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}

export default MainPage