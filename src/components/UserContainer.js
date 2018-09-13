import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionCreators from '../action/action'
import Users from './Users';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.onDeleteUser = this.onDeleteUser.bind(this)
     }

 componentWillMount() {
   console.log("yaha")
   this.props.dispatcher.getUserData();
 }

  onDeleteUser(id){
   this.props.dispatcher.deleteUserData(id);
   this.props.dispatcher.getUserData();
 }
    render(){
        return (
            <Users{...this.props} onDeleteUser={this.onDeleteUser}/>
        )
    }
}

const mapStateToProps = (state) => {
  return { userState : state.UserReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatcher : bindActionCreators(ActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
