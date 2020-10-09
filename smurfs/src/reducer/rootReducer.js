import {FETCH_START,FETCH_SUCCESS} from "../action/actions.js";

const initialState = {
    smurf: [],
    isLoading:false,
    error:'',
}

export const rootReducer = (state= initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return{
                ...state,
                isLoading: true,
            }
        case FETCH_SUCCESS:
          return{
              ...state,
              isLoading:false,
              smurf: action.payload
          }
        default:
            return state;
    }
}