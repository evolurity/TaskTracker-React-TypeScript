import React from "react";
import {useHistory} from "react-router-dom";

export const AboutPage: React.FC = () => {

    const history = useHistory()

    return <>
        <h1>Information page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae distinctio, dolor dolorem
            eveniet expedita explicabo facilis iste laboriosam neque, numquam odit officiis praesentium saepe sed, velit
            veritatis vero voluptatem!</p>
        <button className='btn' onClick={() => history.push('/')}>return to Todo List</button>
    </>
}