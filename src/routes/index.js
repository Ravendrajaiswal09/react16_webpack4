import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import  UserContainer  from '../components/UserContainer';
import  AddUserContainer  from '../components/AddUserContainer';
import  App  from '../components/app';



export default (store, history) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users" component={UserContainer} />
          <Route path="/users/new" component={AddUserContainer} />
          <Route path="/users/:id" component={AddUserContainer} />
        </Switch>
      </BrowserRouter> 
    </Provider>
  );
};
