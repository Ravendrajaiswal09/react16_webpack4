
import * as HttpClient from '../api/HttpClient';

export const CALL_API = Symbol('CALL_API');
export const CHAIN_API = Symbol('CHAIN_API');

export default({ dispatch, getState }) => next => action => {

  if (action[CALL_API]) {
    return dispatch({ [CHAIN_API] : [() => action] });
  }
  if (!action[CHAIN_API]) {
    return next(action);
  }

  const promiseCreators = action[CHAIN_API].map((apiActionCreator) => {
    return createRequestPromise(apiActionCreator, next, getState, dispatch);
  });

  const overall = promiseCreators.reduce((promise, creator) => {
    return promise.then((body) => {
      return creator(body);
    });
  }, Promise.resolve());
};



function createRequestPromise(apiActionCreator, next, getState, dispatch) {
  return (prevBody) => {
    const apiAction = apiActionCreator(prevBody);
    const params = apiAction[CALL_API];
    const state = getState();
    const responseCallback = (res) => {
      dispatch({ type : params.successType, response : res, combinedState : state });
    };

     const errorCallback = (err) => {
        dispatch({ type : 'AUTH_ERROR_OBJECT', response : err, apiError : true });
     }

    HttpClient.getUsers(params.path, responseCallback, errorCallback)
  };

}
