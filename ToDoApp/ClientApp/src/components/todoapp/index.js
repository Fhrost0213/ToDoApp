import React from 'react';
import AddItem from '../additem'
import ToDoItem from '../todoitem'

export class ToDoApp extends React.Component {
    displayName = ToDoApp.name;

    constructor(props) {
        super(props);

        this.state = { items: [] }

        this.refreshItems();
    }

    refreshItems = () => {
        this.getItems();
        this.mapItems(this.state.items);
    }

    getItems = () => {
        fetch('api/SampleData/GetItems')
            .then(response => response.json())
            .then(data => {
                this.setState({ items: data });
            });
    }

    mapItems = (props) => {
        if (props) {
            return (
                props.map(function(d, idx) {
                    console.log(d.value);
                    return (<ToDoItem id={idx} value={d.value} isCompleted={d.isCompleted} />)
                }));
        }
    }

    render() {
        return (
            <div>
                <h3>To Do List</h3>
                <AddItem refreshItems={this.refreshItems} />
                {this.mapItems(this.state.items)}
            </div>
        );
    }
}
