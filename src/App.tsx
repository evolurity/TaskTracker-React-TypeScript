import React from 'react';
import {Navbar} from "./component/navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {TodosPage} from "./pages/todos-page";
import {AboutPage} from "./pages/about-page";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route component={TodosPage} path='/' exact/>
                    <Route component={AboutPage} path='/about'/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
