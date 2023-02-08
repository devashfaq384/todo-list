import React, { useState } from 'react';
import './App.css';
import From from './components/From';
import { Todo } from './types';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [ todo , setTodo ] = useState<string>("")
  const [todos , setTodos] = useState<Todo[]>([])

  const addTodo = (e : React.FormEvent)=>{ 
    e.preventDefault()
    if(todo){
      setTodos([...todos , {id: Date.now() , todo:todo , isDone : false}])
      setTodo("")
    }
  }
  console.log(todos)
  console.log(todo)
  return (
    <div className="App">
      <span className='heading'>Todo_List_TypeScript</span>
      <From todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList  todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
