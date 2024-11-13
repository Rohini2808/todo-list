import React from "react";
import C2 from "./C2";
function C1(){
    let x=5
    return(<>
    <h1>the value passed from C1 is:{x}</h1>
    <C2 info={x}/>
    </>)
}
export default C1