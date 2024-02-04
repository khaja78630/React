const initialSate = { count: 0, name: 'Vinay'}
function counterReducer(state = initialSate, action) {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, count: state.count + action.payload
            }
        case 'DECREMENT':
            return {
                ...state, count: state.count - action.payload
            }
        default:
            return state;
    }
}
export default counterReducer;

//redux - connect,
// react -redux - 

// middleware - thunk
