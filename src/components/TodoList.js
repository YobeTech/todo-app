import React from 'react'

const TodoList = ({todos, setTodos}) => {
    const handleRemove = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const handleCompleted = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return{...item, completed: !item.completed};
                }
                return item;
            })
        );
    };
  return (
    <div>
        {todos.map((todo) => (
            <li className='todo-list' key={todo.id}>
                <input type="text" value={todo.title} className="list" onChange={(event) =>event.preventDefault()} />
                <button className='task-complete' onClick={() => {handleCompleted(todo)}}>Complete</button>
                <button className='edit-todo'>Edit</button>
                <button className='remove-todo' onClick={() => {handleRemove(todo)}}>Remove</button>

            </li>
        )

        )

        }
    </div>
  )
}

export default TodoList;