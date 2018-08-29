'use strict';
import React ,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Head from '../commonent/Head';

import
class App extends Component {

    render(){
        return(
            <div style={{marginTop:10}}>
                <Head/>
                <Switch>
                    <Route exact path={'/'} component={MIndex} />
                    <Route exact path={'/app/form'} component={UForm} />
                    <Route exact path={'/app/header/Calendars'} component={Calendars} />
                    <Route exact path={'/app/chart/echarts'} component={Echarts} />
                    <Route component={noMatch} />
                </Switch>
            </div>
        )
    }
}


export default App;