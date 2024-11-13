import React from "react";
import C9 from "./C9";
function C8(props){
    return(<>
    <h1>the value passed from C8 is:{props.data6}</h1>
    <C9 data7={props.data6}/>
    </>)
}
export default C8