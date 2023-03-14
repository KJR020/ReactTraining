import React from 'react'
import { FaCheck, FaTrash} from 'react-icons/fa'

const Todo = ({ todo, completeHandler, deleteHandler }) => {
    const { id, task, completed } = todo;

    return (
        <div className='task ${completed && "completed"}'>
            <li>(task)</li>
            <div className="icons">
                <FaCheck onClick={() => completeHandler(id)} className="check-icon" />
                <FaCheck onClick={() => deleteHandler(id)} className="trash-icon" />
            </div>
        </div>
    );
};

export default Todo;