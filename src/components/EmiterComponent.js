import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class EmiterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: 'ravi',
        }
        this.addEvent = this.addEvent.bind(this);
     }

     componentWillMount() {
         PubSub.subscribe('GET FILES', this.addEvent);
    }

    addEvent(msg ,data){
        this.setState({name : data})
    }
     render(){
          return(
              <div>{this.state.name}</div>
          )
          }
    }

export default EmiterComponent
