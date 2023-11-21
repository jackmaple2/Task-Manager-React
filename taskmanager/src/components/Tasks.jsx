import React from "react";

export default function Tasks(props) {


    return (
        <div className="container">
            <h2 className="text-left">Task List:</h2>
             {props.tasks.map((task) => {
                return <div key={task.id} >
                    <h3>{task.task}</h3>
                    <button className="btn btn-danger">Delete</button>
                </div>
            })}
        </div>
    )
}