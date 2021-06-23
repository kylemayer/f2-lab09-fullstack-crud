import React, { Component } from 'react'
import { getOneDuck, getAllCategories, updateDuck} from './fetch_utils'
export default class DetailPage extends Component {
    state = {
        name: '',
        mass_oz: 25,
        feet_color: 'orange',
        category_id: 2,
        categories: []
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id

        const duck = await getOneDuck(id)
        const categories = await getAllCategories();

        this.setState({
            name: duck.name,
            mass_oz: duck.mass_oz,
            feet_color: duck.feet_color,
            category_id: duck.category_id,
            categories: categories
        })
    }

    nameChange = e => {
        this.setState({ name: e.target.value });
    }

    categoryChange = e => {
        this.setState({ category_id: e.target.value });
    }

    weightChange = e => {
        this.setState({ weight: e.target.value });
    }

    feetColorChange = e => {
        this.setState({ feet_color: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await updateDuck(this.props.match.params.id, {
            name: this.state.name,
            mass_oz: this.state.mass_oz,
            feet_color: this.state.feet_color,
            category_id: this.state.category_id
        })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h3>C || U || D a duck</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input value={this.state.name} onChange={this.nameChange} />
                    </label>
                    <label>
                        Feet_Color:
                        <input value={this.state.feet_color} onChange={this.feetColorChange} />
                    </label>
                    <label>
                        Weight:
                        <input value={this.state.mass_oz} type="number" onChange={this.weightChange} />
                    </label>
                    <label>
                        Category:
                        <select value={this.state.category} onChange={this.categoryChange}>
                            {this.state.categories.map(category =>
                                <option
                                    selected={category.id === this.state.category_id}
                                    value={category.id}>
                                    {category.category}
                                </option>
                            )}
                        </select>
                    </label>
                    <button>C||U duck!</button>
                    <button>Destroy this duck!</button>
                </form>
            </div>
        )
    }
}
