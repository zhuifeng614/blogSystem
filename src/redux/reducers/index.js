import {combineReducers} from "redux"
import loginReducers from "./login"
//合并Reducers
export default combineReducers({
	userInfo:loginReducers
})