import React, {useEffect, useState} from "react";
import {TodoForm} from "./todo-form";
import {Todos} from "./todos";

export const TodoContainer: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    useEffect(() => {
            const saved = JSON.parse(localStorage.getItem('todo') || '[]') as string[];
            setTodos(saved);
        }, []
    )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    return (
        <>
            <TodoForm setTodos={setTodos} prevState={todos}/>
            <Todos todos={todos} setTodos={setTodos}/>
        </>
    )
}