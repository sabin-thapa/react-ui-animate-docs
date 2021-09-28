import { combineReducers } from "redux";
import { loginReducer } from "./login.reducer";
import { userReducer } from "./user.reducer";
import { buildingReducer } from "./building.reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  building: buildingReducer,
});

export default rootReducer;
