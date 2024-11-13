import React from "react";

function Dec(){
    let a=0

    function Decval(){
        a=a-1
        console.log(a);
    }
    return(
        <>
    <h1>{a}</h1>
    <button onClick={()=>Decval()}>Dec</button>
    </>
    )
}
export default Dec