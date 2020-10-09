import {FETCH_START,FETCH_SUCCESS,POST_FORM} from "../action/actions.js";

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
              smurf: action.payload,
          }
          case POST_FORM:
              console.log("HELLO WE HERE")
          return{
            
              ...state,
              smurf: [...state.smurf,action.payload],
          }
        default:
            return state;
    }
}