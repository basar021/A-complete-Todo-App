import React, {useState} from 'react';

import './newtodo.css';


export default function NewTodo(props) {

    const [todo, setTodo] = useState({
        title: "",
        desc: ""
    });

    const { title, desc } = todo;

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: event.target.value };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo); // onAddTodo from home.js

        // After submit todo value empty
        setTodo({
            title: "",
            desc: ""
        });
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form_field">
                {/* <label htmlFor="title"> </label> */}
                <input onChange={handleChange}
                    value={title}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Add your title..."
                />
                <textarea
                    onChange={handleChange}
                    value={desc}
                    type="text"
                    id="desc"
                    name="desc"
                    placeholder="Add your description..."
                />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
};
