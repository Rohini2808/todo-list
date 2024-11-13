import React, { useState } from "react";

function Exam() {
  let [value, setValue] = useState("Rohini");

  function toggleName() {
    
    if(value == "Rohini"){
        setValue("Ronnie");
    }else if(value=="Ronnie"){
        setValue("Rohini");
    }else{
        setValue("Rohini")
    }
    }

  return (
    <>
      <h1>{value}</h1>
      <button onClick={toggleName}>UpdateName</button>
    </>
  );
}
export default Exam;
