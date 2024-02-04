import {DECREMENT} from './Actions';

function decrement(){
    return {
        type : DECREMENT,
        payload: 2
    }
}
export default decrement;