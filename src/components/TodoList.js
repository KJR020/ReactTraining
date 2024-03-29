import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false, id: Date.now() }];
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
  };

  return (
    <Container maxWidth="sm">
      <TodoForm addTodo={addTodo} />
      <List>
        {todos.map((todo) => (
          <TransitionGroup>
          {todos.map((todo) => (
            <CSSTransition key={todo.id} timeout={300} classNames="item">
              <Todo
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
          // <Todo
          //   key={todo.id}
          //   todo={todo}
          //   toggleComplete={toggleComplete}
          //   deleteTodo={deleteTodo}
          //   editTodo={editTodo}
          // />
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
