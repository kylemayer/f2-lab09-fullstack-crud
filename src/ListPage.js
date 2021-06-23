import React, { Component } from 'react'
import { getAllDucks } from './fetch_utils'
import { Link } from 'react-router-dom'
export default class ListPage extends Component {

    state = {
        ducks: [],
    }

    componentDidMount = async () => {
        const ducks = await getAllDucks()

        this.setState({ ducks: ducks})
    }

    render() {
        return (
            <div className="duck-list">
                {this.state.ducks.map(duck => <Link to={`ducks/${duck.id}`}>
                <div className='duck'>
                    <p>{duck.name}</p>
                    <p>Feet Color: {duck.feet_color}</p>
                    <p>Size: {duck.category}</p>
                    <p>Weight: {duck.mass_oz}oz</p>
                </div>
                </Link>)
                }
            </div>
        )
    }
}
