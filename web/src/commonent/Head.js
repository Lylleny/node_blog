'use strict';
import React,{Component} from 'react';
import {Input,Modal,message} from 'antd';
import {NavLink} from 'react-router-dom';
import '../styles/Head.css';
import Login from '../commonent/Login';

export default class header extends Component{

    constructor(props){
        super(props);
        this.state={
            visible:false
        }
    }


    login(value){

    }

    showModle(){
    this.setState({
        visible:true
    })
    }

    handleCancel(){
        this.setState({
            visible:false
        })
    }

    render(){
        return(
            <div className="header">
                <div className="logo"><i >Lyalleny</i>iBlog</div>
                <div className="navs">
                    <NavLink exact activeClassName="active" to='/app'>点  滴</NavLink>
                    <NavLink exact activeClassName="active" to='/app/edit'>生  活</NavLink>
                    <NavLink exact activeClassName="active" to='/app/lay'>关  于</NavLink>
                    <a style={{marginLeft:50}} onClick={()=>{this.showModle()}}>登录</a>

                </div>

                <Modal title="登录" visible={this.state.visible} footer={null} width={400} onCancel={()=>{this.handleCancel()}}>
                    <Login onSubmit = {(value)=>{this.login(value)}}/>
                </Modal>

            </div>
        )
    }
}