import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Form from './components/Form'
import  TodoList from './components/TodoList';

const App =() => {
const [input, setInput] = useState("");
const [todos, setTodos] = useState([]);
  return (
    <div>
        <Header />
        <div>
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}/>
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos}/>
        </div>
      </div>
    
  );
}

export default App;
