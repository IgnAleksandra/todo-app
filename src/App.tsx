import React, {FC,ChangeEvent, useState} from 'react';
import './App.css';
import {ITask} from './Interfaces'
import TodoTask from './Components/TodoTask'; 

const App:FC =()=> {

const[task,setTask]= useState<string>("");
const[deadline,setDeadline]= useState<number>(0);
const[todoList,setTodoList]= useState<ITask[]>([]);

const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
  if(event.target.name === "task"){
    setTask(event.target.value);
  }else{
    setDeadline(Number(event.target.value));
  }
};

const addTask = () :void => {
  const newTask = {taskName : task, deadline:deadline}
  setTodoList([...todoList,newTask]);
  setTask("");
  setDeadline(0);
}

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
        <input type="text" value={task} placeholder="Task..." name ="task" onChange={handleChange} />
        <input type="number" value={deadline} placeholder="Deadline (inDays)..." name="deadline" onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="TodoList">
        {todoList.map( (task: ITask , key: number) =>{
          return <TodoTask key={key} task={task} />;
        })}
      </div>
    </div>
  );
}

export default App;
