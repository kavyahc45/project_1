import axios from 'axios'
import BrowserHistory from '../Utils/BrowserHistory';
export function registerHandle(payload){
    debugger
const options = {
url: 'http://localhost:4002/Signup',
method: 'POST',

data: payload
};

return function(dispatch)
{
axios(options)
.then(response => {
console.log(response.status);
BrowserHistory.push('./Login')

});
dispatch({type:'REGISTER',payload:payload});
}
}