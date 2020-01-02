import * as ActionTypes from './types';


export function BeginFunc(ActionType) {
    return { type: ActionType }
    }
    
    export function SuccessFunc(ActionType, result) {
    return {
    type: ActionType,
    payload: result
    }
    }
    
    export function ErrorFunc(ActionType, error) {
    return {
    type: ActionType,
    payload: { error }
    }
    }
    
    export function submitSignup(userdata) {
    return dispatch => {
    dispatch(BeginFunc(ActionTypes.ADD_SIGNUP_BEGIN));
    HttpWrapper('POST', '/users/signup', false, userdata)
    .then(response => {
    dispatch(SuccessFunc(ActionTypes.ADD_SIGNUP_SUCCESS, response.data));
    
    setTimeout(function() {
    browserHistory.push('/');
    }, 2000);
    
    })
    
    .catch(error => {
    dispatch(ErrorFunc(ActionTypes.ADD_SIGNUP_FAILURE, error));
    });
    };
    }
    
    export function userInformation() {
    return dispatch => {
    dispatch(BeginFunc(ActionTypes.GET_USER_BEGIN));
    
    HttpWrapper('GET','/users/getall', false, '')
    .then(response => {
    response.data.result.forEach((data1,i)=>{
    response.data.result[i].color='null'
    })
    console.log(response)
    dispatch(SuccessFunc(ActionTypes.GET_USER_SUCCESS, response.data));
    console.log(response);
    
    })
    .catch(error => {
    dispatch(ErrorFunc(ActionTypes.GET_USER_FAILURE, error));
    });
    };
    }
    
    export function dynamicColor(data){
    return function (dispatch){
    dispatch({
    type:"CHANGE_COLOR",
    payload:data
    });
    }
    }