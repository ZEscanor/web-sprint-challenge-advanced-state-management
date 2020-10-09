import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS= "FETCH_SUCCESS";
export const POST_FORM = "POST_FORM";

export const fetchData = (url) => (dispatch) => {
    dispatch({type:FETCH_START});
    axios
    .get(url)
    .then((res)=>{
        dispatch({type:FETCH_SUCCESS, payload: res.data})
      // console.log(res.data)
    })
    .catch((err)=> console.log(err))
}

export const postData = (data)=> (dispatch) => {
    console.log("WE POSTIN BOYZ",data)
    axios.post( "http://localhost:3333/smurfs",data)
    .then((res)=>{
        dispatch({type:POST_FORM,payload: res.data})
    })
    .catch((err)=> console.log(err))
}