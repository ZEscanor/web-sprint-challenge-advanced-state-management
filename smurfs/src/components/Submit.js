import React, {useState} from "react";
import { useForm } from "react-hook-form";

const SubmitData = (props) => {
    const [data, setData] = useState();
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    setData(data);
  };
  console.log(data)
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
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" name="submit"/>
    </form>)
      
  
}

export default SubmitData;