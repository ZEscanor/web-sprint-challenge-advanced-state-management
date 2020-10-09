import React, {useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import {postData} from "../action/actions.js";
import {connect} from 'react-redux';
import axios from 'axios';

const SubmitData = (props) => {
     const { postData } = props;
      
    const [data, setData] = useState();
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
       // this effect will only call an action creator, not make an API call
       setData(data)
  
  };
  console.log(data)
 console.log("this is state",props.hooks)
 useEffect(() => {
    // this effect will only call an action creator, not make an API call
    postData(data);
  }, [postData, data]);
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="name">name*</label>
      <input
        name="name"
        id = "name"
        ref={register({ required: true, minLength: 3 })}
      />
     
    </div>
    <div>
          <label htmlFor="height">height</label>
          <input
            name="height"
            id = "height"
            ref={register({ required: true,minLength:3 })}
          />
        
        </div>
        <div>
          <label htmlFor="age">age</label>
          <input
            name="age"
            id = "age"
            ref={register({ required: true,minLength:3 })}
          />
        </div>
        {/* {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )} */}
        <input type="submit" name="submit"/>
    </form>)
      
  
}
const mapStateToProps = (state) => {
    return{
      smurf: state.smurf
    };
  };

export default  connect(mapStateToProps,{postData})(SubmitData);