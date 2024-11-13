import React from "react";
import C4 from "./C4";
function C3(props){
    return(<>
    <h1>the value passed from C3 is:{props.data}</h1>
    <C4 data2={props.data}/>
    </>)
}
export default C3