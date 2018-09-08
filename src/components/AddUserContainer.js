import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionCreators from '../action/action'
import AddUser from './AddUser';

class AddUserContainer extends Component {
    constructor(props) {
        super(props);
        this.doSubmit = this.doSubmit.bind(this)
     }
      componentWillMount() {
          if(!_.isEmpty(this.props.params))
             this.props.dispatcher.getUserData(this.props.params.id);
    }

     doSubmit(userData){
         if (userData._id)
            this.props.dispatcher.updateUserData(userData);
         else
            this.props.dispatcher.setUserData(userData);
     }

    render(){
        return (
            <AddUser {...this.props} doSubmit={this.doSubmit}/>
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
