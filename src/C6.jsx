import React from "react";
import C7 from "./C7";
function C6(props){
    return(<>
    <h1>the value passed from C6 is:{props.data4}</h1>
    <C7 data5={props.data4}/>
    </>)
}
export default C6