import React, { Component } from 'react'
import { getAllDucks } from './fetch_utils'
import { Link } from 'react-router-dom'
export default class ListPage extends Component {

    state = {
        ducksArr: [],
    }

    componentDidMount = async () => {
        const ducks = await getAllDucks()

        this.setState({ ducksArr: ducks})
    }

    render() {
        return (
            <div className="duck-list">
                {this.state.ducksArr.map(duck => <Link to={`ducks/${duck.id}`}>
                <div className='duck'>
                    <p>{duck.name}</p>
                    <p>Size: {duck.category}</p>
                    <p>Weight(oz): {duck.mass_oz}</p>
                    <p>Feet Color: {duck.feet_color}</p>
                </div>
                </Link>)
                }
            </div>
        )
    }
}
