import React from 'react';
import './Styles.css';

export default class ToDoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = { id: props.id, value: props.value, isCompleted: props.isCompleted }
    }

    onCheckboxClick = (e) => {
        this.setState({
            isCompleted: e.target.checked
        });

        this.updateItem();
    }

    updateItem = () => {
        fetch('api/Items',
                {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: this.state.id, value: this.state.value, isCompleted: this.state.isCompleted
                    })
                })
            .then(response => console.log(response));
    }

    render() {

        return (
            <li className="list-group-item d-flex justify-content-between align-items-center" id={this.state.id}>
                {this.state.value}
                <span className="badge badge-primary badge-pill">
                    <input type="checkbox" checked={this.state.isCompleted} onClick={this.onCheckboxClick} />
                </span>
            </li>
        )
    }
}
