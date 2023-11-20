import React from "react";

export default function EnterItem(props) {


    return (
        <div>
            <label htmlFor="task-field">New task: </label>
            <input type="text"></input>
            <button className="btn btn-primary" type="button" >Add Task</button>
        </div>
    )
}