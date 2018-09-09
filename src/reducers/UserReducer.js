import * as ActionConstants from '../common/constants';
import * as UserHelper from './UserHelper';
const initialState ={
    users:[]
}

const UserReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ActionConstants.GET_USER_DATA:
          return UserHelper.convertUserData(state, action); 
        default:
          return state;
      }
}


export default UserReducer;