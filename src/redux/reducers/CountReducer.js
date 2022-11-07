import { DECREMENT, INCREMENT } from "../actions/types";

const initialState = { 
    count : 0,
};
const CountReducer = (state = initialState ,action) =>
{
    switch(action.type) {
        case INCREMENT:
            return {...state,count : state.count + action.payload};
        case DECREMENT:
            if(state.count<=0) return
            else return {...state,count : state.count - action.payload};
        default:
          return state;
      }
}


export default CountReducer;