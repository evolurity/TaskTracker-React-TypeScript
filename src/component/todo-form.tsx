import React, {ChangeEvent, useReducer} from "react";
import reducer from "../reducer";

export type TodoFormType = {
    setTodos: React.Dispatch<React.SetStateAction<string[]>>
    prevState: string[]
}
export const TodoForm: React.FC<TodoFormType> = ({setTodos, prevState}) => {
    const [state, dispatch] = useReducer(reducer, '')
    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodos([state, ...prevState,])
        dispatch({
            type: 'clearInputField'
        })
    }
    return (
        <div className="row">
            <form className="col s12" onSubmit={onSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea className="materialize-textarea"
                                  value={state}
                                  onChange={(e) => dispatch({
                                      type: 'renderInput',
                                      payload: e.target.value
                                  })}
                                  placeholder='input your task'
                        ></textarea>

                    </div>
                    <button className="btn waves-effect waves-light mt" type="submit">Add
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>
    )
}