import React from 'react';

import Home from './components/Todo_app/Home';

/* =======================================
step1: install -> npm i uuid --save font-awesome
        and import "font-awesome/css/font-awesome.min.css"; -> index.js
step2: Home.js -> Todos.js -> Todo.js
step3: NewTodo.js -> Home.js - onAddTodo
step4: Todo.js -> Home.js - onRemoveTodo
======================================= */

const App = () => {
    return (
        <div>
            <Home />
            
        </div>
    );
};

export default App;
