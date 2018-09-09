import _ from 'lodash';

let clonedState;
export const convertUserData = (state, action) => {
  clonedState = _.cloneDeep(state);
   let res = action.response,
    returnList = [];
    if(_.isPlainObject(res)) {
      returnList.push(res)
    }
    else {
  _.forEach(res, (item) => {
    let userInfo = {
      address: {}
    };
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
         userInfo[key]=item[key]
      }
    }
      returnList.push(userInfo)
    })
  }
  
  clonedState.users = returnList
  return clonedState
}