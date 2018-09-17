import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import  UserContainer  from '../components/UserContainer';
import  App  from '../components/app';
import Loadable from 'react-loadable';


const Loading = () => <div>Loading...</div>;

const AddUserContainer = Loadable({
  loader: () => import('../components/AddUserContainer'),
  loading: Loading,
});



export default (store, history) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" >
          <IndexRoute component={App} />
        </Route>
        <Route path="/users" component={UserContainer} />
        <Route path="/newuser" component={AddUserContainer} />
        <Route path="/users/:id" component={AddUserContainer} />
        
      </Router> 
    </Provider>
  );
};
