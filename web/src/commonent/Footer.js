import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Footer.css';

export default class Footer extends Component{

    render(){
        return(
            <div className="footer">
                <div className="inner">
                    <div className="links">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/'}>Example</Link>
                        <Link to={'/'}>Jobs</Link>
                        <Link to={'/'}>About</Link>
                    </div>
                    <div className="rights">
                        Copyright 2018. All right reserved,powered by Lylleny.Designed by Lylleny.
                    </div>
                </div>
            </div>
        )
    }
}