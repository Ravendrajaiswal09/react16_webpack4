import React, { Component } from 'react';
import { Link, browserHistory} from 'react-router';
import _ from 'lodash';

class Users extends Component {
    constructor(props) {
        super(props);
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
     }

     addUser(id){
        let url =''
        if (id)
             url = `/users/${id}`
        else
            url = '/newuser'
        browserHistory.push(url);
     }

     deleteUser(id){
            this.props.onDeleteUser(id)
     }

    render(){
       let users = this.props.userState.users
        return (
        <div>
            <h1>User</h1>
            <p>
            <button className="btn btn-primary" onClick={() =>this.addUser()}>Add User</button>
            </p>
            <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
                { _.size(users) > 1 ?
                    users.map((user, index) => {
                        return(
                            <tbody key={index}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td >{user.name}</td>
                                    <td>{user.email}</td>
                                    <td> <a ><i className="fa fa-edit" onClick={() => this.addUser(user._id)}></i></a></td>
                                    <td> <i onClick={() => this.deleteUser(user._id)} className="fa fa-times"></i></td>
                                </tr>
                            </tbody>
                        )
                    }) :null }
            </table>
        </div>
        )
    }
}
export default Users
