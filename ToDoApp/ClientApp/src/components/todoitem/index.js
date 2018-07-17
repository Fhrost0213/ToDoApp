import React from 'react';
import './Styles.css';

export default class ToDoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = { id: props.id, value: props.value, isCompleted: props.isCompleted }
    }

    render() {

        return (
            <div className="todoItem" id={this.state.id}>
                <div className="itemName">{this.state.value}</div>
                <label className="completedCheckBox">
                    <input type="checkbox" checked={this.state.isCompleted} />
                    <span></span>
                </label>
            </div>
        )
    }
}
