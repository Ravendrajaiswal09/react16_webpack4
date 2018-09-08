import * as ActionConstants from '../common/constants';
import * as HttpClient from '../api/HttpClient';
import { CALL_API, CHAIN_API } from '../api/CustomMiddleware';

let url= 'https://localhost:3100/task';

export function getUserData (userId) {
    const list = [];
    let url= 'https://localhost:3100/task'
    let url1= 'https://localhost:3100/new_task'
    if(userId)
        url = url + "/" + userId;
    list.push(() => {
      return getTask1(url);
    });
    list.push(() => {
      return getTask2(url1);
    });
   //return HttpClient.getUsers(url, ActionConstants.GET_USER_DATA)
    return { [CHAIN_API] : list };
};


function getTask1(url){
 return {
    [CALL_API] : {
      method : 'get',
      path : url,
      successType : ActionConstants.GET_USER_DATA
    }
  };
}

function getTask2(url1){
 return {
    [CALL_API] : {
      method : 'get',
      path : url1,
      successType : ActionConstants.GET_NEW_USER_DATA
    }
  };
}


export function setUserData (user) {
    return HttpClient.addUsers(url, ActionConstants.SET_USER_DATA, user)
};

export function updateUserData (user) {
    let url= 'http://localhost:3100/task'
    url = url + "/" + user._id;
    user = _.omit(user, ['_id'])
    return HttpClient.updateUsers(url, ActionConstants.UPDATE_USER_DATA, user)
};

export function deleteUserData (userId) {
    let url= 'http://localhost:3100/task'
    if(userId)
        url = url + "/" + userId;
    return HttpClient.deleteUser(url, ActionConstants.DELETE_USER_DATA)
};
