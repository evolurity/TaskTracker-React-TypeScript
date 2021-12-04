import React from "react";
import {Todo} from "./todo";

export type TodosType = {
    todos: string[]
    setTodos: React.Dispatch<React.SetStateAction<string[]>>
}

export const Todos: React.FC<TodosType> = ({todos, setTodos}) => {


    const onDelete = (indexDel: number) => {
        const isDelete = window.confirm('You agree?');
        if (isDelete) {
            setTodos(todos => todos.filter((todo, index) => {
                    if (index !== indexDel) {
                        return todo
                    }
                }
            ))
        }
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header"><h4>Todo List</h4></li>
            {todos.map((todo, index) => {
                if (!todo) return null
                return (
                    <Todo key={index} todo={todo}
                          onClick={() => onDelete(index)}/>
                )
            })}
        </ul>
    )
}