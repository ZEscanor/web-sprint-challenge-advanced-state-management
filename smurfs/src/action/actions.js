import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS= "FETCH_SUCCESS";

export const fetchData = () => (dispatch) => {
    dispatch({type:FETCH_START});
    axios
    .get("http://localhost:3333/smurfs")
    .then((res)=>{
        dispatch({type:FETCH_SUCCESS, payload: res.data})
      // console.log(res.data)
    })
    .catch((err)=> console.log(err))
}