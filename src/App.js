import React, { useState } from "react";
import Todolist from "./Todolist";
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    
    console.log("deleted");

    setItems((oldItems)=>{
    return oldItems.filter((arrElem, index) =>{
    return index !== id;
    })
    })

  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br></br>
          <h1 className="heading"> ToDo List</h1>
          <br></br>
          <div className="container">
            <input
              type="text"
              placeholder="Add a Items"
              value={inputList}
              onChange={itemEvent}
            />
            <button onClick={listOfItems}> + </button>
          </div>
          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
