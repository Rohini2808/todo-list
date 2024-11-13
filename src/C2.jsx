import React from "react";
import C3 from "./C3";

function C2(props){
    return(<>
    <h1>the value passed from C2 is:{props.info}</h1>
    <C3 data={props.info}/>
    </>)
}
export default C2