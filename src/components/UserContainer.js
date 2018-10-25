import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShowComponent from './ShowComponent'
import * as ActionCreators from '../action/action'
import Users from './Users';
import EmiterComponent from './EmiterComponent';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
          addUser:false,
          changenumber:0
      }
        this.onDeleteUser = this.onDeleteUser.bind(this)
        this.changechild = this.changechild.bind(this)
     }

 componentWillMount() {
  this.props.dispatcher.getUserData();
 }

 changechild(){
  this.setState({changenumber : (this.state.changenumber+1) })
}

 async onDeleteUser(id){
  await this.props.dispatcher.deleteUserData(id);
  await this.props.dispatcher.getUserData();
 }
    render(){
        return (
         < div>
         <EmiterComponent/>
            <ShowComponent changenumber= {this.state.changenumber}/>
            <Users{...this.props} onDeleteUser={this.onDeleteUser} changechild={this.changechild}/>
            </div>
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
