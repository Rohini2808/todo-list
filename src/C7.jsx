import React from "react";
import C8 from "./C8";

function C7(props){
    return(<>
    <h1>the value passed from C7 is:{props.data5}</h1>
    <C8 data6={props.data5}/>
    </>)
}
export default C7