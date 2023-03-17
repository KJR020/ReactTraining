import React from 'react'
import { FaCheck, FaTrash} from 'react-icons/fa'

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
    const handleCheckboxClick = () => {
        toggleComplete(todo.id);
    };

    const handleDeleteClick = () => {
        deleteTodo(todo.id);
    };
    
    const handleEditClick = () => {
        const newValue = prompt('Edit the todo item:', todo.text);
        if (newValue) {
            editTodo(todo.id, newValue);
        }
    };

return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleCheckboxClick}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
                {todo.text}
            </span>
        </div>
        <div>  
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
    );
};

export default Todo;