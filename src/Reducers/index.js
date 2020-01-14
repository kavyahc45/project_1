import SignupReducer from '../Reducers/SignupReducer';
import LoginReducer from '../Reducers/LoginReducer';
import UserReduser from '../Reducers/UserReduser';
import { combineReducers } from 'redux';


export default combineReducers({

    SignupReducer,
LoginReducer,UserReduser

})