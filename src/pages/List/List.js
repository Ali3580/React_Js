import React, { useState } from "react";
import "./List.css";
import ToDoList from "../TodoList/TodoList";

function List() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (inputList.trim() !== "") {
      if (editIndex !== null) {
        // If an item is being edited, update it
        const updatedItems = [...items];
        updatedItems[editIndex] = inputList;
        setItems(updatedItems);
        setEditIndex(null); // Clear the edit state
      } else {
        // Otherwise, add a new item
        setItems((prevItems) => [...prevItems, inputList]);
      }
      setInputList(""); // Clear the input field
    }
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setEditIndex(index);
    setInputList(items[index]); // Set the input field value to the item being edited
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="maindiv">
      <h1>ToDo List</h1>
      <div className="centerdiv">
        <br />
        <h2>ToDo List</h2>
        <br />
        <input
          className="todo_input"
          value={inputList}
          type="text"
          placeholder="ADD ITEM"
          onChange={(e) => setInputList(e.target.value)}
          onKeyPress={handleKeyPress} 
        />
        <button className="todo_button" onClick={addItem}>
          {editIndex !== null ? "+" : "+"}
        </button>
        <ol>
          {items.map((itemValue, index) => (
            
            <div key={index} className="todo_item">
              {editIndex === index ? (
                <input
                  className="edit_input"
                  value={inputList}
                  onChange={(e) => setInputList(e.target.value)}
                  onKeyPress={handleKeyPress} 

                />
              ) : (
                <li>{itemValue}</li>
              )}
              <div className="button_container">
                {editIndex === index ? (
                  <button className="save_button" onClick={addItem}>
                    Save
                  </button>
                ) : (
                  <button className="edit_button" onClick={() => editItem(index)}>
                    Edit
                  </button>
                )}
                <button className="delete_button" onClick={() => deleteItem(index)}>
                  Delete
                </button>
              </div>
            </div>
            
          ))}
        </ol>
      </div>
    </div>
  );
}

export default List;
