import React, { Component, useState,useEffect } from "react";
import {fetchData} from "../action/actions.js";
import {connect} from 'react-redux';
import SubmitData from "./Submit.js"
import axios from 'axios';
import "./App.css";



function App(props) {
  const { fetchData } = props;
  const [url, setUrl] = useState(
    "http://localhost:3333/smurfs"
  );
  useEffect(() => {
    // this effect will only call an action creator, not make an API call
    fetchData(url);
  }, [fetchData, url]);

    console.log(axios.get(url))
    return (
      <div className="App">
         <SubmitData/>
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {props.smurf.map((smurfi) => (
        <div className = {smurfi.id}>
        <h1 key={smurfi.id}>{smurfi.name}</h1>
        <h2>{smurfi.height}</h2>
        <h3>{smurfi.age}</h3>
        </div>
       
      ))}
      </div>
    );
  }

const mapStateToProps = (state) => {
  return{
    smurf: state.smurf
  };
};

export default connect(mapStateToProps,{fetchData})(App);
