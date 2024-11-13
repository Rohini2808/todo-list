import React from "react";
function Form3(){
    return (<>
    <table>

        <tr>
    <td><label>Mobile No:</label></td>
  <td><input type="number" placeholder='mobile no'/></td>
  </tr>

<tr>
  <label>Country</label>
  <td>
  <select>
      <option value="choose yours">choose yours</option>
      <option value="latur">latur</option>
      <option value="pune">pune</option>
      <option value="mumbai">mumbai</option>
    </select></td>
     </tr>

<tr>
 <td><label>Zip code:</label></td>
<td><input type="number" placeholder='zip code'></input></td>
</tr>

<tr><button>submit</button></tr>
</table>
    </>)
}

export default Form3