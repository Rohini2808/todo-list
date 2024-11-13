import React from "react";

function State(){
let a=0;
    function UpdateValue(){
        a=a-1
        console.log(a);
    }
    return(<>
    <h1>{a}</h1>
    <button onClick={()=>UpdateValue()}>inc</button>
    
    </>)

}
export default State