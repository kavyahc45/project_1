import axios from 'axios';
import BrowserHistory from '../Utils/BrowserHistory';

export function loginHandle(payload){
const options = {
    url: 'http://localhost:4002/Signin',
    method: 'POST',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json;charset=UTF-8'
    // },
    data: payload
  };
  
    return function(dispatch)
     {console.log(payload,"login")
        axios(options)
        .then(response => {
          console.log(response.status);
          sessionStorage.setItem('authentication', response.data.token)
          BrowserHistory.push('/gen_inf')
        });
       dispatch({type:'LOGIN',payload:payload});
     }
}