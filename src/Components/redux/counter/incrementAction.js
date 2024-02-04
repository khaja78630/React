import {INCREMENT} from './Actions';

function increment(counter){
    return {
        type : INCREMENT,
        payload: counter
    }
}
export default increment;