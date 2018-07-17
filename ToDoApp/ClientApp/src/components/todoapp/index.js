import React from 'react';
import AddItem from '../additem'
import ToDoItem from '../todoitem'

export class ToDoApp extends React.Component {
    displayName = ToDoApp.name;

    constructor(props) {
        super(props);

        this.state = { items: [] }

        this.getItems();
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
                props.map(function (d, idx) {
                    console.log(d.value);
                    return (<ToDoItem id={idx} value={d.value} isCompleted={d.isCompleted} />)
                }))
        }
    }


    render() {

        let testItems = [{ id: 100, value: "test", isCompleted: "true" },{ id: 99, value: "test", isCompleted: "true" }]

        return (
            <div>
                <h3>To Do List</h3>
                <AddItem />
                {this.mapItems(this.state.items)}
            </div>
        );
    }
}
