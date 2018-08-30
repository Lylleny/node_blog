'use strict';
import React ,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import {Layout} from 'antd';

const {Content,Footer} = Layout;
class index extends Component {

    render(){
        return(
            <Layout style={{marginTop:70,padding:20}}>
                <Content>
                    <span>index page,this is my fist blog demo ,this is detail pages</span>

                </Content>

            </Layout>
        )
    }
}


export default index;