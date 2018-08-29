import React,  {Component} from 'react';
import {Switch,HashRouter,Route,Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './pages/App';

const history = createHistory();

export default class Routers extends  Component {

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={App}/>
                </Switch>
            </Router>
        )
    }
}