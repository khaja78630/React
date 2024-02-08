const initialSate = {
    users: [

    ]
}
function userReducer(state = initialSate, action) {

    switch (action.type) {
        case 'ADD_USER':
            return {
                users : [...state.users, action.payload] // [{ name: 'Vinay', id: 2 }, { name: 'Sai', id: 3 }, {name : 'khaja}, id: 4]
            }
            case 'DELETE_USER':
                return {
                    users : [...state.users.filter((user) =>{ //3 []
                        return !(user.id === action.payload.userId) // 2!== 3 /// 3!==3 --- [{ name: 'Vinay', id: '2' }]
                    })] // 2 !===3 [user, ]
                }
                // case 'UPDATE_USER':
                //     return {
                //         db.update()
                //     }
        case 'GET_USERS': 
        return {
            users: action.payload
        }
        default:
            return state;
    }
}
export default userReducer;


// useSelector, usedispatch, combinereducer
//redux - connect,
// react -redux - 