import React, { useState } from "react";

function Update() {
    let[value,setValue]=useState(0)
  function handlerevent() {
    console.log("clicked");
    setValue(value+1);

  }
  return (
    <>
      <h1>my updated number:{value}</h1>
      <button onClick={() => handlerevent()}>update value</button>
    </>
  );
}

export default Update;
