import React , {useEffect} from 'react'

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
   
   const updateTodo = (title, id, completed) => {
const newTodo = todos.map((todo) => 
    todo.id === id ? {title, id, completed} : todo
)
setTodos(newTodo);
setEditTodo("")
   };
useEffect(() => {
    if (editTodo) {
        setInput(editTodo.title);
    } else {
        setInput("")
    }
}, [setInput, editTodo]);


    const onInputChange = (event) => {
        setInput(event.target.value);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo) {

            setTodos([...todos, { id: Math.floor(Math.random(todos.index)*2000), title: input, completed: false}]);
            setInput(" ");
         } else {
            updateTodo(input, editTodo.id, editTodo.completed)
         }
        }
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" 
        placeholder="Enter a Todo..." 
        className="task-input" 
        value={input}
        onChange={onInputChange}/>
        

        <button className="button-add" type="submit">{editTodo ? "OK" : "ADD"}</button>
    </form>
  )
}

export default Form;