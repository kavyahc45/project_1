import axios from 'axios'
import BrowserHistory from '../Utils/BrowserHistory';
export function cropHandle(payload){
    console.log(payload)

const options = {
url: 'http://localhost:4002/cinsurencedetiles',
method: 'POST',
data: payload
};

return function(dispatch)
{
axios(options)
.then(response => {
console.log(response.status);
// BrowserHistory.push('./form')

});
dispatch({type:'CROP',payload:payload});
}
} 