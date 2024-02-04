import {ADD_USER} from './actions';
function addUser(user){
    return {
        type : ADD_USER,
        payload: user
    }
}
export default addUser;