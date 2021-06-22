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
            <div>
                {this.state.ducks.map(duck => <Link to={`ducks/${duck.id}`}>
                <div>
                    <p>{duck.name}</p>
                    <p>{duck.mass_oz}</p>
                    <p>{duck.category}</p>
                    <p>{duck.feet_color}</p>
                </div>
                </Link>)
                }
            </div>
        )
    }
}
