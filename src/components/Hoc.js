import React, { Component } from 'react';

const hoc = (WrappedComponent) => (newData)=>
   class extends Component {
    constructor(props){
      super(props)
      this.state = {
        searchTerm: newData.data
      }
  }
  
   handleSearch = event => {
    this.setState({ searchTerm: newData.data.toUpperCase()})
  } 

  render() {
      return (
        <div>
           <button className="btn btn-primary" onClick={() =>this.handleSearch()}>Add User HOC</button>
          <WrappedComponent {...this.props} {...this.state}/>
      </div>
    )
  }
}

  export default hoc