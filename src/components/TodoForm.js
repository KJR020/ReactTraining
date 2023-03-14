import React, { useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({
                ...todo,
                id: uuidv4(),
            });
            setTodo({
                ...todo,
                task: "",
            });
        }
    };

    const handleChange = (e) => {
        setTodo({
            ...todo,
            task: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="task"
                value={todo.task}
                onChange={handleChange}
                placeholder="Enter a new task"
            />
            <button type="submit">Add</button>
        </form>
        );
    };