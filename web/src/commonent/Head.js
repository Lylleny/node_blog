'use strict';
import React,{Component} from 'react';
import {Input,Modal,message} from 'antd';
import {NavLink} from 'react-router-dom';
import '../styles/Head.css';

export default class header extends Component{

    render(){
        return(
            <div className="header">
                <div className="logo"><i >Lyalleny</i>iBlog</div>
                <div className="navs">
                    <NavLink exact activeClassName="active" to='/app'>点滴</NavLink>
                    <NavLink exact activeClassName="active" to='/app/detail'>生活</NavLink>
                    <NavLink exact activeClassName="active" to='/app/lay'>关于</NavLink>
                </div>
            </div>
        )
    }
}