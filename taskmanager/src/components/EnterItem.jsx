import React, { useState } from "react";

export default function EnterItem(props) {

    const [newTask, setNewTask] =useState('');

    function addItemButtonPressed() {
        props.addItem({tasks: newTask});
        setNewTask('');
    }

    return (
        <div className="container">
            <div className="text-center">
                <label htmlFor="task-field">New task: </label>
                <input type="text"></input>
                <button className="btn btn-primary" type="button" onClick={addItemButtonPressed} >Add Task</button>
            </div>
        </div>
    )
}