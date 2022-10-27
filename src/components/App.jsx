import React, { useState } from "react";

const listItems = ["A Item"];

function App() {
  const [inputData, setInputData] = useState("");

  function handleChange(event) {
    let newValue = event.target.value;

    setInputData((prevValue) => {
      return newValue;
    });
  }

  function addItem() {
    listItems.push(inputData);
    console.log(listItems);
    setInputData("");
  }

  const listofItems = listItems.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputData} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{listofItems}</ul>
      </div>
    </div>
  );
}

export default App;
