import React, {useState} from "react";

export const Todo = (props: { todo: string, onClick: () => void }) => {
    const [isCheck, setCheked] = useState(false);
    return (
        <li className='collection-item'>
            <div>
                <label>
                    <input type="checkbox" checked={isCheck} onChange={() => setCheked(!isCheck)}/>
                    <span></span>
                </label>
                {props.todo}
                <a href="#" className="secondary-content">
                    <i className="material-icons"
                       onClick={props.onClick}>delete
                    </i>
                </a>
            </div>
        </li>
    )
}