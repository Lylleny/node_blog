'use strict';
import React ,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Head from './commonent/Head';
import home from './pages/home';
import detail from './pages/detail';

class App extends Component {

    render(){
        return(

            <Redirect to="/app" />

        )
    }
}


export default App;