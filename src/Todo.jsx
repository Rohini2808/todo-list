import React,{useState} from "react";
function Todo() {
  let [todoText, setTodoText] = useState("");
  let [displayTodo, setDisplayTodo] = useState([]);
  function addItems() {
    let tempArr = [...displayTodo];
    tempArr.push(todoText);
    setDisplayTodo(tempArr);
  }
  console.log("new arr",displayTodo);
  return (
    <>
      <input type="text" onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={() => addItems()}>ADD</button>

{
    displayTodo.map((ele,ind)=>{
        return(
            <>
            <p>{ind + 1}.{ele}</p>
      <button>Delete</button>
      <button>Edit</button>

            </>
        )
    })
}

      {/* <p>1.Javascript</p>
      <button>Delete</button>
      <button>Edit</button>

      <p>2.python</p>
      <button>Delete</button>
      <button>Edit</button> */}

      
    </>
  );
}
export default Todo;
