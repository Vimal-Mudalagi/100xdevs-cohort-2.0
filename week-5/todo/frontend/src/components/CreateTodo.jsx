import React, { useState } from 'react';

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const onClick = async () => {
        try {
            const response = await fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: desc
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();
            alert("Todo added");
            console.log('Response:', json);
        } catch (error) {
            console.error('Failed to create todo:', error);
        }
    };

    return (
        <div>
            <input
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder='title...'
                onChange={(e) => setTitle(e.target.value)}
                id='title'
                value={title}
            />

            <input
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder='description...'
                onChange={(e) => setDesc(e.target.value)}
                id='desc'
                value={desc}
            />

            <button
                style={{
                    padding: 10,
                    margin: 10
                }}
                onClick={onClick}
            >
                Add a todo
            </button>
        </div>
    );
}

export default CreateTodo;
