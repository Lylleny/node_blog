'use strict';
import React ,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Head from '../commonent/Head';
import detail from './detail';
import index from './index';

class home extends Component {

    render(){
        console.log(this.props.path);
        return(
            <div style={{backgroundColor:'#fff',display:'flex'}}>
                <Head/>
                <Switch>
                    <Route exact='/app' path='/app' component={index} />
                    <Route  path='/app/detail' component={detail} />

                </Switch>

            </div>
        )
    }
}


export default home;