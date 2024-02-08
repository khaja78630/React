import {GET_USERS} from './actions';
import axios from 'axios'
function getUsers(data){
    return {
        type : GET_USERS,
        payload: data
    }
}
function userApiCall() {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            dispatch(getUsers(response.data)) // {type : GET_USERS, palylod: data}
        })
        .catch(error => {

        })


       
    }

}

function deleteUser(data){
    return {
        type : GET_USERS,
        payload: data
    }
}
function deleteuserApiCall() {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users/1').then(response => {
            dispatch(getUsers(response.data)) // {type : GET_USERS_SUCCESS, palylod: data}
        })
        .catch(error => {

        })


       
    }

}



export default userApiCall;

// thunk - saga - GET_USERS - GET_USERS_SUCCESS


