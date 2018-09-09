import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

class Header extends Component {

    render(){
        return (
            <div className="navbar navbar-default">
                <div className="container">
                <a className="navbar-brand">Bootswatch</a>
                <Link className="navbar-brand"  to={"/users"} >Users</Link>
                <Link className="navbar-brand" to={"/post"} >Posts</Link>
                </div>
            </div>
        )
    }
}

export default Header