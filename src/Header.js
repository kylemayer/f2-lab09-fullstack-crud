import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h3>Duck encyclopedia</h3>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/create">Add a duck</Link></p>
            </div>
        )
    }
}
