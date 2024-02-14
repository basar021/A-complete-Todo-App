import React from 'react';

import Todo from './Todo';
import './todos.css';

export default function Todos(props) {
    const { todos } = props;
    return (
        <section className="todos">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveTodo={props.onRemoveTodo} />
            ))}
        </section>
    );
}
