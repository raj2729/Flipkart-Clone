import { authConstants } from "../actions/constants";

const initState = {
  name : "Raj"
};

export default (state = initState , action) => {

  console.log(action);
  

  switch(action.type){
    case authConstants.LOGIN_REQUEST : 
      state = {
        ...state,
        ...action.payload
      }
      break;
    
  }
  return state;
}