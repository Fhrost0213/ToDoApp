import React from 'react';
import AddItem from '../additem'
import ToDoItem from '../todoitem'
import './Styles.css';

export class ToDoApp extends React.Component {
    displayName = ToDoApp.name;

    constructor(props) {
        super(props);

        this.state = { items: [], showCompleted: false }

        this.refreshItems();
    }

    refreshItems = () => {
        this.getItems();
        this.mapItems(this.state.items);
    }

    getItems = () => {
        fetch('api/Items/Get')
            .then(response => response.json())
            .then(data => {
                this.setState({ items: data });
            });
    }

    mapItems = (props) => {
        if (props) {
            return (
                props.map(function (d, idx) {
                    return (<ToDoItem id={idx} value={d.value} isCompleted={d.isCompleted} />)
                }));
        }
    }

    handleCheckboxClick = (event) => {
        this.setState({
            showCompleted: event.target.checked
        });
    }

    filterItems = (props) => {
        if (props) {

        let arr = props;

        if (this.state.showCompleted === true) {
            return arr;
        }
        else {
            return arr.filter(item => item.isCompleted === false);
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>To Do List</h3>
                </div>
                <div className="row">
                    <AddItem refreshItems={this.refreshItems} />
                </div>
                <div className="row">
                    <label className="showCompleted">Show Completed?</label>
                    <span className="badge badge-primary badge-pill">
                        <input type="checkbox" checked={this.state.showCompleted} onClick={this.handleCheckboxClick} />
                    </span>
                </div>
                <div className="row">{this.mapItems(this.filterItems(this.state.items))}</div>
            </div>
        );
    }
}
