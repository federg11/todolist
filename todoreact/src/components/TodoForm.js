import React, {useState} from 'react'

 const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // add todo
        addTodo(value);
        // clear form after submission
        setValue('');
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Escribe una tarea para realizar?' />
    <button type="submit" className='todo-btn'>Agregar tarea</button>
  </form>
  )
}
export default TodoForm