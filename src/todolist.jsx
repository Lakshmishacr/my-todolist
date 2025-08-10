import React, { useState } from "react"

function todolist() {
    const [tasks, setTasks] = useState(["wake up early everyday", "go to gym evryday", "eat healthy evety day"]);
    const [newTask, setnewTask] = useState("");

    function handleinputchange(event) {
        setnewTask(event.target.value);

    }
    function addtask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setnewTask(" ");
        }

    }
    function deletetask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);

    }
    function moveTasksup(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);


        }

    }
    function moveTasksdown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);


        }


    }


    return (
        <div className="todo">
            <h1>TO-DO-LIST</h1>
            <div>
                <input
                    type="text"
                    placeholder="enter a task.."
                    value={newTask}
                    onChange={handleinputchange} />
                <button
                    className="add-button"
                    onClick={addtask}>
                    add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="task">{task}</span>

                        <button
                            className="delete-button"
                            onClick={() => deletetask(index)}>
                            delete
                        </button>

                        <button
                            className="move-button"
                            onClick={() => moveTasksup(index)}>
                            👆
                        </button>

                        <button
                            className="move-button"
                            onClick={() => moveTasksdown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}
export default todolist 