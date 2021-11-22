import React, { useState, Fragment } from "react";
import List from "./List";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([
    "walk the dog",
    "buy the milk",
    "learn some code"
  ]);

  // userinput is controlled by the App component
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const addItem = (e) => {
    if (userInput !== "") {
      setList([...list, userInput]);
      setUserInput(""); // resets the input to empty 
    }
  };

  const removeItem = (item) => {
    const updatedList = list.filter( listItem => listItem !== item );
    setList(updatedList);
  };

  return (
    <Fragment>
      <List list={list} removeItem={removeItem} />
      <hr />
      <form>
        <input
          placeholder="Something to do..."
          value={userInput}
          onChange={handleChange}
        />
        <button type="button" onClick={addItem}>
          {'Add Item'}
        </button>
      </form>
    </Fragment>
  );
}

export default App;
