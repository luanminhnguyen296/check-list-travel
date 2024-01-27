import React, { useState, useEffect } from "react";
import "../assets/styles/App.css";
import "../assets/styles/List.css";

function List() {
  const [toDoList, setToDoList] = useState(() => {
    const data = localStorage.getItem("toDoList");
    return data ? JSON.parse(data) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [nextIndex, setNextIndex] = useState(1); // Tạo ra một index mới

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const addToList = () => {
    if (inputValue) {
      setToDoList([...toDoList, { nameTodo: inputValue, status: false }]);
      setNextIndex(nextIndex + 1);
      setInputValue(""); // Xóa giá trị nhập
    }
  };

  function handleRemove(index) {
    const newList = [...toDoList];
    newList.splice(index, 1);
    setToDoList(newList);
  }

  function handleCheckboxChange(index) {
    const newList = [...toDoList];
    newList[index].status = !newList[index].status;
    setToDoList(newList);
    console.log(newList);
  }

  useEffect(() => {
    // Read from localStorage
    const data = localStorage.getItem("toDoList");
    if (data) {
      setToDoList(JSON.parse(data));
    }
  }, []);

  function clearList() {
    if (window.confirm("Are you sure you want to delete all items?"))
      setToDoList([]);
  }

  const sortByDescription = () => {
    const sortedList = [...toDoList];
    sortedList.sort((a, b) => a.nameTodo.localeCompare(b.nameTodo));
    setToDoList(sortedList);
  };

  const sortByPackedStatus = () => {
    const sortedList = [...toDoList];
    sortedList.sort((a, b) => a.status - b.status);
    setToDoList(sortedList);
  };

  const sortByInputOrder = () => {
    const sortedList = [...toDoList];
    sortedList.sort((a, b) => a.index - b.index);
    setToDoList(sortedList);
  };

  const handleSort = (sortOption) => {
    if (sortOption === "description") {
      sortByDescription();
    } else if (sortOption === "packed") {
      sortByPackedStatus();
    } else if (sortOption === "input") {
      sortByInputOrder();
    }
  };

  function Footer({ toDoList }) {
    const packedItems = toDoList.filter((item) => item.status === true);

    return (
      <div className="stats">
        {toDoList.length > 0
          ? packedItems.length === toDoList.length
            ? "You are ready to go! 🚀"
            : `You have ${
                toDoList.length
              } item(s) in your packing list 🎒, and you already packed ${
                packedItems.length
              } (${(packedItems.length / toDoList.length).toFixed(2) * 100}%)`
          : "Start adding some items to your packing list 🚀"}
      </div>
    );
  }

  return (
    <div className="list">
      <form
        className="add-form"
        onSubmit={(e) => {
          e.preventDefault();
          addToList();
        }}
      >
        <h3>What do you need for your 😍 trip?</h3>
        <select
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        >
          {(() => {
            const options = [];
            for (let i = 1; i <= 20; i++) {
              options.push(
                <option value={i} key={i}>
                  {i}
                </option>
              );
            }
            return options;
          })()}
        </select>
        <input
          type="text"
          placeholder="   Item..."
          className="inputItem"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>

      <ul className="todo-list">
        {toDoList.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.status || false}
              onChange={() => handleCheckboxChange(index)}
            />{" "}
            <span className={item.status ? "done" : ""}>{item.nameTodo}</span>
            <button onClick={() => handleRemove(index)}>❌</button>
          </li>
        ))}
      </ul>

      <div className="action">
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={clearList}>clear list</button>
      </div>

      <Footer toDoList={toDoList} />
    </div>
  );
}

function App() {
  return (
    <>
      <div className="app">
        <div className="header">
          <h1>🏝️ Far Away 🧳</h1>
        </div>
        <List />
      </div>
    </>
  );
}

export default App;
