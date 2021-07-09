import React from 'react'

const Task = ({ index, task_id, task, markComplete, trashTask  }) => {

    const removeTask = () => {
      trashTask(index, task_id);  
    };
 
    return (
      
      <div className="todo-list" id={task_id}>
      
        <p>         
          <input
            className="todo-checkbox"
            type={"checkbox"}
            id={index}
            onChange={() => {
              markComplete(index);
            }}
          ></input>
              <label
          style={{
            textDecoration: task.status ? "line-through" : "",
            color: task.status ? "rgb(15, 95, 55)" : "",
          }}
          htmlFor={index}>
          {task.content}
        </label>
          <div id="btntrash">
          <button className="btn-trash" onClick={removeTask}>
          </button><p class="text">Remove Task</p></div>
        </p>
        
      </div>

    );
  };
  

export default Task
