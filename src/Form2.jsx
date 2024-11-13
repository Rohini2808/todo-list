import React from "react";
function Form2(){
return (<>
<h1>Form</h1>
<table>
<tr>
<td><label>First Name:</label></td>
<td><input type="text" placeholder='First Name'/></td>
</tr>



<tr>
<td><label>Last Name:</label></td>
<td><input type ="text" placeholder='Last name'/></td>
</tr>

<tr>
<td><label >Email</label></td>
<td><input type="email" placeholder='Email'/></td>
</tr>

<tr>
<td><label >Password</label></td>
<td><input type="password" placeholder='Password'/></td>
</tr>
</table>
</>)





}
export default Form2