import * as ActionConstants from '../common/constants';
import * as HttpClient from '../api/HttpClient';


let url= 'http://localhost:3100/task';

export function getUserData (userId) {
    let url= 'http://localhost:3100/task'
    if(userId)
        url = url + "/" + userId;
   return HttpClient.getUsers(url, ActionConstants.GET_USER_DATA)
};

export function getIdData (userId) {
    console.log(userId)
    let url= 'http://localhost:3100/task'
    if(userId)
        url = url + "/" + userId;
   return HttpClient.getUsers(url, ActionConstants.GET_ID_DATA)
};



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
