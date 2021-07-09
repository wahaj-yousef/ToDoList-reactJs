import React from "react";
import Task from "./Task";

const List = ({ list, markComplete, trashTask }) => {
  return (
    <div>
      <div id="list-container">
        {list.map((task, index) => (
          <Task
            key={index}
            index={index}
            task_id={`todo-list-${index}`}
            task={task}
            markComplete={markComplete}
            trashTask={trashTask}
          />
        ))}
      </div>
      <div id="footer">
        <p>“Action is the foundational key to all success.”</p>
        <small>Picasso, Spanish painter</small>
      </div>
    </div>
  );
};

export default List;
