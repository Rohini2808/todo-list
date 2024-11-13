import React, { useState } from "react";

function Totext() {
  let [todoText, setTodoText] = useState("");
  let [displayTodo, setDisplayTodo] = useState([]);
  let [editIndex, setEditIndex] = useState(null);
  
  function addItem() {
    let temp = [...displayTodo];
if(editIndex!==null){
    temp[editIndex] = todoText;
    setEditIndex(null);
}else{
    temp.push(todoText);
}
    
    setDisplayTodo(temp);
    setTodoText("");
  }

  console.log("new arr", displayTodo);

  function deleteItem(index) {
    let tempArr = [...displayTodo];
    tempArr.splice(index, 1);
    setDisplayTodo(tempArr);
    
  }

  function editItem(index) {
    setTodoText(displayTodo[index]); 
    setEditIndex(index); 
  }
  

  return (
    <>
      <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={() => addItem()}>
        {(() => {
    if (editIndex !== null) {
      return "edit";
    } else {
      return "Add";
    }
  })()}
  </button>

      {displayTodo.map((ele, index) => {
        return (
          <>
            <p>
              {index + 1}.{ele}
            </p>
            <button onClick={() => deleteItem(index)}>delete</button>
            <button onClick={()=>editItem()}>edit</button>
          </>
        );
      })}
    </>
  );
}
export default Totext;
