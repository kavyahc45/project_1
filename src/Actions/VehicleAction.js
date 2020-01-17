import axios from 'axios'
import BrowserHistory from '../Utils/BrowserHistory';
export function vehicleHandle(payload){
const options = {
url: 'http://localhost:4002/vinsurencedetiles',
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
// dispatch({type:'',payload:payload});
}
}