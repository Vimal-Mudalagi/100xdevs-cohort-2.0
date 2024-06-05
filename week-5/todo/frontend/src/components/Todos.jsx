import React from 'react';

const Todos = ({ todos }) => {
    return (
        <div>
            {Array.isArray(todos) ? (
                todos.map((todo) => (
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
                    </div>
                ))
            ) : (
                <div>No todos available</div>
            )}
        </div>
    );
};

export default Todos;
