
import './App.css';
import React, {useState} from 'react';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();

    const toDoItem = {
      item: newTodo,
      complete: false
    }

    setTodos([...todos, toDoItem]);
    e.target.reset();
  }

  const handleDelete=(idx)=>{
    const filterTodos = todos.filter((todo, i)=>{
      return i !== idx;
    });
    setTodos(filterTodos);
  }

  const handleToggle=(idx)=>{
    const updateTodos = todos.map((todo, i)=>{
      if(idx == i){
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updateTodos);
  }

  return (
    <div className="App container">
      <h1>To Do List:</h1>
      <form  onSubmit={(e)=>{handleSubmit(e);}}>
        <input className="form-control" onChange={(e)=>{setNewTodo(e.target.value);}} type="text"/>
        <button className="btn btn-primary mt-2 mb-5">Add</button>
      </form>

      {
        todos.map((todo,idx)=>{
          const todoClasses = ["form-check-label"];
          if(todo.complete){
            todoClasses.push("strike-through")
          }
          return <div key={idx}>
            <div className="form-check">
              <input className="form-check-input" onChange={(e)=>{handleToggle(idx);}}checked={todo.complete} type="checkbox"/>
              <label className={todoClasses.join(" ")}>{todo.item}</label>
            <button className="btn btn-danger ms-2" onClick={(e)=>{handleDelete(idx);}}>Delete</button>
            </div>
            </div>
        })
      }
    </div>
  );
}

export default App;
