import React from "react";
import Component2 from "./Component2";
function Component1(){
    let x=30;
    return(<>
    <Component2 info={x}/>
    </>)
}
export default Component1