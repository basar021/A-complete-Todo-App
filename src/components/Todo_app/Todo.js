import React from 'react';

import './todo.css';

export default function Todo(props) {
    const { title, desc } = props.todo;
    const { id } = props;

    const handleClick = (id) => {
        props.onRemoveTodo(id);
    };

    return (
        <article className="todo">
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            <div>
                <button
                    onClick={() => {
                        handleClick(id);
                    }}
                    className="btn">
                    <i className="fa fa-trash fa-2x"></i>
                </button>
            </div>
        </article>
    );
}
