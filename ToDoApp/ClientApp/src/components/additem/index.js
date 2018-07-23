import React from 'react';
import './Styles.css';

export default class AddItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = { itemValue: '' };
    }

    handleChange = (event) => {
        this.setState({
            itemValue: event.target.value
        });
    }

    handleSubmit = () => {

        fetch('api/Items',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: 0, value: this.state.itemValue
                })
            })
        .then(() => this.props.refreshItems());    
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <button type="submit" onClick={this.handleSubmit}>Add Item</button>
            </div>
        )
    }
}