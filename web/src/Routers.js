import React,  {Component} from 'react';
import {Switch,HashRouter,Route,Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import 'antd/dist/antd.css';

import App from './App';
import home from './pages/home';
import index from './pages/index';
import detail from './pages/detail';

const history = createHistory();

export default class Routers extends  Component {

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route   path="/app" component={home}/>

                </Switch>
            </Router>
        )
    }
}