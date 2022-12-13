import { createStore, combineReducers } from "redux";
import UserReducer from "./reducers/userReducer";
import AuthReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
});

export const store = createStore(rootReducer);
