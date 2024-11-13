import React from "react";
import C6 from "./C6";
function C5(props){
    return(<>
    <h1>the value passed from C5 is:{props.data3}</h1>
    <C6 data4={props.data3}/>
    </>)
}
export default C5;