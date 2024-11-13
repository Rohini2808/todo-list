import React from "react";
import C5 from "./C5";
function C4(props){
    return(<>
    <h1>the value passed from C4 is:{props.data2}</h1>
    <C5 data3={props.data2}/>
    </>)
}
export default C4