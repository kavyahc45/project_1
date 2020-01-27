import axios from 'axios';
import BrowserHistory from '../Utils/BrowserHistory';

export function loginHandle(payload) {
  console.log(payload);
  const options = {
    url: 'http://localhost:4002/Signin',
    method: 'POST',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json;charset=UTF-8'
    // },
    data: payload
  };

  return function (dispatch) {
    console.log(payload, "login")
    axios(options)
      .then(response => {
        console.log(response.status);
        sessionStorage.setItem('authentication', response.data.token)
        sessionStorage.setItem('role', response.data.role)
        sessionStorage.setItem('email', response.data.email)
        if (!response.data.Admin) {
          BrowserHistory.push('/gen_inf')
        }
      });
    dispatch({ type: 'LOGIN', payload: payload });
  }
}

// export function loginHandle(userdata) {
//   debugger
//   return dispatch => {
//   dispatch(BeginFunc(ActionTypes.ADD_SIGNUP_BEGIN));
//   HttpWrapper('POST', '/Signin', false, userdata)

//   .then(response => {
//   debugger
//   sessionStorage.setItem('authentication', response.data.token)
//   sessionStorage.setItem('role', response.data.role)
//   if(!response.data.Admin)
//   {
//   BrowserHistory.push('/dashboard')
//   }

//   // dispatch(SuccessFunc(ActionTypes.ADD_LOGIN_SUCCESS, response.data));
//   // BrowserHistory.push('/dashboard');
//   })
//   .catch(error => {
//   dispatch(ErrorFunc(ActionTypes.ADD_LOGIN_FAILURE, error));
//   });
//   };
//   }