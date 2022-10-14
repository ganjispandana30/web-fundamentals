import React, { useState, useEffect } from 'react';



function Example() {
  // Declare a new state variable, which we'll call "count"
  const [text, onChangeText] = useState("");
  const [state,setState]=useState(0);
  const [state1,setState1]=useState(0);
  useEffect(()=>{
    console.log("Am i called");
    if(state1<5)
                {   console.log("useEffect called");
            }},[state1])

  return (
    <div>
        <h1 onClick={()=>setState(state+1)}>hello {state}</h1>
        <h1 onClick={()=>setState1(state1+1)}>magic {state1}</h1>
       <input type="primary" onChange={(e) => {onChangeText(e.target.value)}}/>
        <h1>{text}</h1>
    
    </div>
  );
}

export default Example;