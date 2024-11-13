import React, { useState } from "react";

function Login() {
  let [username, setUsername] = useState(""); 
  let [display_username, setDisplay_username]=useState("");
  let [password, setPassword] = useState("");
  let [display_password,setDisplay_password]=useState("");

  

  function displayInfo() {
    setDisplay_username(username);
    setDisplay_password(password);
    setUsername("");
    setPassword("");
    
  }
  return (
    <>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/><br></br>

      <label>Password:</label>
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>

      <button onClick={()=>displayInfo()} >submit</button>
          

        <h4>username:{display_username}</h4>
        <h4>password:{display_password}</h4>
     
    </>
  );
}
export default Login;
