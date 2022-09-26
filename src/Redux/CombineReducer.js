import { combineReducers } from "redux";
import darkModeReducer from "./ThemeReducer";

export default combineReducers({
  darkMode: darkModeReducer,
});