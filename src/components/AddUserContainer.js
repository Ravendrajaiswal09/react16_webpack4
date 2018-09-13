import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, browserHistory} from 'react-router';

import * as ActionCreators from '../action/action'
import AddUser from './AddUser';

class AddUserContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            addUser:false
        }
        this.doSubmit = this.doSubmit.bind(this)
     }
      componentWillMount() {
          if(!_.isEmpty(this.props.params)){
             this.setState({addUser : true})
             this.props.dispatcher.getIdData(this.props.params.id);
          }
    }

     doSubmit(userData){
         if (userData._id)
            this.props.dispatcher.updateUserData(userData);
         else
            this.props.dispatcher.setUserData(userData);
            
        browserHistory.push('/users');
     }

    render(){
        const addpages = ()=>{
            return(
                <AddUser {...this.props} doSubmit={this.doSubmit} addUser={this.state.addUser}/> 
            )}
        return (
            <div>
                { !this.state.addUser && addpages() }
                { this.state.addUser && this.props.userState.users.length === 1 && addpages()}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
