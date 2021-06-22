import React, { Component } from 'react'
import { createDuck } from './fetch_utils'
export default class CreatePage extends Component {
    state = {
        name: '',
        mass_oz: 20,
        feet_color: 'orange',
        category_id: 2,
    }

nameChange = e => {
    this.setState({ name: e.target.value });
}

weightChange = e => {
    this.setState({ mass_oz: e.target.value });
}

feetColorChange = e => {
    this.setState({ feet_color: e.target.value });
}

categoryChange = e => {
    this.setState({ category_id: e.target.value });
}

handleSubmit = async e => {
    e.preventDefault();

    await createDuck({
        name: this.state.name,
        mass_oz: this.state.mass_oz,
        feet_color: this.state.feet_color,
        category_id: this.state.category_id
    })
    this.props.history.push('/')
};

    render() {
        return (
            <div>
                <h3>Create a duck</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input onChange={this.nameChange} />
                    </label>
                    <label>
                        Body Weight:
                        <input type="number" onChange={this.weightChange} />
                    </label>
                    <label>
                        Feet Color:
                        <input onChange={this.feetColorChange} />
                    </label>
                    <label>
                        Category:
                        <select onChange={this.categoryChange}>
                            <option value="1">Compact</option>
                            <option value="2">Medium</option>
                            <option value="3">Large</option>
                            <option value="4">Giant</option>
                        </select>
                    </label>
                    <button>Create</button>
                </form>

            </div>
        )
    }
}
