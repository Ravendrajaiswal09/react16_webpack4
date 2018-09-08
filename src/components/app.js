import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/header';

class App extends Component {
  constructor(props){
    super(props)
  }
    render() {
        return (
          <div className="container">
            <Header />
              {this.props.children}
          </div>
        )
    }
}

export default App;