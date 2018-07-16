import React from 'react';
import AddItem from '../additem'

export class ToDoApp extends React.Component {
    displayName = ToDoApp.name;

    constructor(props) {
        super(props);

        this.refreshItems();
    }

    refreshItems = () => {
        fetch('api/SampleData/GetItems')
            .then(response => response.json())
            .then(data => data.map(item => <div key={item.id}>{item.value}</div> ))   
    }

    render() {
        return (
            <div>
                <h3>To Do List</h3>
                <AddItem />
                <div>{this.refreshItems()}</div>
            </div>
        );
    }
}
