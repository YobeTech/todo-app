import React from 'react'

const Form = ({input, setInput, todos, setTodos}) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
    setTodos([...todos, { id: Math.floor(Math.random(todos.index)*2000), title: input, completed: false}]);
    setInput("");
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" 
        placeholder="Enter a Todo..." 
        className="task-input" 
        value={input}
        onChange={onInputChange}/>
        

        <button className="button-add" type="submit">Add</button>
    </form>
  )
}

export default Form;