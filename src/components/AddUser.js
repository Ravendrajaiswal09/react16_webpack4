 import React, { Component } from 'react';
 import { Formik } from 'formik';
 
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
          }
        }
     }

    componentDidMount(){
      let user = this.props.userState.users[0]
          for (let key in user) {
              if (user.hasOwnProperty(key)) {
                  this.setState({[key]: user[key]});
              }
          }
    } 
    render(){
      const add_edit_pages = ()=>{
        return(
          <Formik
          initialValues={this.state}
           validate={values => {
            let errors = {};

            if (!values.name) {
              errors.name = "A name is required";
            } else if (values.name.length < 6) {
              errors.name = "Name must be 6 characters";
            }

            if (!values.email) {
              errors.email = "Email is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            }

            return errors;
          }} 
          onSubmit={values => {
            this.props.doSubmit(values);;
          }}
          render={({ touched, errors, values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="col-md-6 well">
              <fieldset>
                <legend>User</legend>
                <div className="form-group">
                  <label>Name</label>
                    <input className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    <div className="error" >{touched.name && errors.name && errors.name} </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                    <input className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                    <div className="error" >{touched.email && errors.email && errors.email} </div>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                    <input className="form-control"
                      type="text" 
                      name="phone"
                      value={values.phone } 
                      onChange={handleChange}/>
                  </div>
              </fieldset>
              <fieldset>
                  <legend>Address</legend>
                  <div className="form-group">
                      <label>Street</label>
                      <input  className="form-control"
                          type="text" 
                          name="address.street"
                          value={values.address.street } 
                          onChange={handleChange} />
                  </div>
                  <div className="form-group">
                      <label>Suite</label>
                      <input className="form-control"
                          type="text" 
                          name="address.suite"
                          value={ values.address.suite} 
                          onChange={ handleChange }/>
                  </div>
                  <div className="form-group">
                      <label>City</label>
                      <input className="form-control"
                          type="text" 
                          name="address.city"
                          value={ values.address.city } 
                          onChange={ handleChange }/>
                  </div>
                  <div className="form-group">
                      <label>ZipCode</label>
                      <input className="form-control"
                          type="text" 
                          name="address.zipcode"
                          value={ values.address.zipcode } 
                          onChange={ handleChange}/>
                  </div>
              </fieldset>
              </div>
              <button className="btn btn-primary" type="submit">Save</button>
            </form>
          )}
        />
        )}
        return(
          <div>
          { !this.props.addUser ? add_edit_pages(): "" }
          { (this.props.addUser && !this.state.name == "") ? add_edit_pages(): ''}
          </div>
        )
      }
}
export default AddUser
