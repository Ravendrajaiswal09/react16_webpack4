import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone:'',
            address :{
                street:'',
                suite:'',
                city:'',
                zipcode:''
            },
            submitButtonDisabled: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.onUserSave = this.onUserSave.bind(this);
     }

     componentWillReceiveProps(nextprops){
        let user = nextprops.userState.users[0]
             for (let key in user) {
                if (user.hasOwnProperty(key)) {
                    this.setState({[key]: user[key]});
                }
            }
     }
     onUserSave(){
        let saveData = _.omit(this.state, ['submitButtonDisabled'])
        this.props.doSubmit(saveData);
     }

    handleChange(e){
     this.setState({[e.target.name]: e.target.value});

     if(e.target.required)
        this.showInputError(e.target.name);
         
     if(this.state.name && this.state.email)
        this.setState({submitButtonDisabled: false});
     
    }

  handleChangeAddress(e){
    let address = Object.assign({}, this.state.address); 
        address[e.target.name] = e.target.value; 

     this.setState({address});
    }
  
  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`; 
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`; 
      }
      return false;
    }
    
    error.textContent = '';
    return true;
  }

    render(){
        return (
        <div className="row">
            <div className="col-md-6 well">
                <fieldset>
                    <legend>User</legend>
                     <div className="form-group">
                        <label id="nameLabel" >Name</label>
                        <input className="form-control"
                            type="input"
                            name="name"
                            ref="name"
                            required
                            value={ this.state.name } 
                            onChange={ this.handleChange }
                             />
                        <div className="error" id="nameError"/>
                    </div>
                    <div className="form-group">
                        <label id="emailLabel">Email</label>
                        <input  className="form-control"
                            type="email" 
                            name="email"
                            ref="email"
                            required
                            value={ this.state.email } 
                            onChange={ this.handleChange }
                             />
                        <div className="error" id="emailError" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input className="form-control"
                        type="text" 
                        name="phone"
                        value={ this.state.phone } 
                        onChange={ this.handleChange }/>
                    </div>
                </fieldset>
                <fieldset formGroupName="address">
                    <legend>Address</legend>
                    <div className="form-group">
                        <label>Street</label>
                        <input  className="form-control"
                            type="text" 
                            name="street"
                            value={ this.state.address.street } 
                            onChange={ this.handleChangeAddress } />
                    </div>
                    <div className="form-group">
                        <label>Suite</label>
                        <input className="form-control"
                            type="text" 
                            name="suite"
                            value={ this.state.address.suite } 
                            onChange={ this.handleChangeAddress }/>
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input className="form-control"
                            type="text" 
                            name="city"
                            value={ this.state.address.city } 
                            onChange={ this.handleChangeAddress }/>
                    </div>
                    <div className="form-group">
                        <label>ZipCode</label>
                        <input className="form-control"
                            type="text" 
                            name="zipcode"
                            value={ this.state.address.zipcode } 
                            onChange={ this.handleChangeAddress }/>
                    </div>
                </fieldset>
                <button disabled={this.state.submitButtonDisabled} className="btn btn-primary"
                    onClick={this.onUserSave}>Save</button>
            </div>
        </div>
        )
    }

}

export default AddUser
