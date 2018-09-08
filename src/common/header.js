import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class Header extends Component {

    render(){
        return (
            <div className="navbar navbar-expand-lg fixed-top bg-primary">
                <div className="container">
                <a className="navbar-brand header">Bootswatch</a>
                <Link className="navbar-brand"  to={"/users"} >Users</Link>
                <Link className="navbar-brand" to={"/post"} >Posts</Link>
                </div>
            </div>
        )
    }
}

export default Header