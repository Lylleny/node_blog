'use strict';
import React,{Component} from 'react';
import {Input,Modal,message} from 'antd';
import {NavLink} from 'react-router-dom';
import '../styles/Head.css';

export default class header extends Component{

    render(){
        return(
            <div className="header">
                <div className="logo">个人博客<i >(Lyalleny)</i></div>
                <div className="navs">
                    <NavLink  activeClassName="active" to='/app'>文章</NavLink>
                    <NavLink  activeClassName="active" to='/app/detail'>关于</NavLink>
                    <NavLink  activeClassName="active" to='/app/lay'>招聘</NavLink>
                </div>
            </div>
        )
    }
}