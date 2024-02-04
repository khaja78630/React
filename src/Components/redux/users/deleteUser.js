import {DELETE_USER} from './actions';
function deleteUser(id){
    return {
        type : DELETE_USER,
        payload: {userId : id}
    }
}
export default deleteUser;