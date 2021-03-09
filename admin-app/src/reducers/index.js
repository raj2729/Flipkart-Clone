import authReducer from "./auth.reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth : authReducer
})

export default rootReducer;

// export default (state : {name : "Raj"} , action ) => {
//   return state;
// }