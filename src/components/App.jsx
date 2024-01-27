import React, { useState, useEffect } from "react";
import "../assets/styles/App.css";
import "../assets/styles/List.css";
import Footer from "./Footer";
import ControlAddTask from "./ControlAddTask";
import ListTask from "./ListTask";
import ControlFilter from "./ControlFilter";
function App() {
    const [toDoList, setToDoList] = useState(null);
    const [valueFilter, setValueFilter] = useState(null);

    function getToDoList() {
        // lấy dữ liệu từ local storage gán cho state listTask
        const data = localStorage.getItem("toDoList");
        console.log("🚀 ~ getToDoList ~ data:", typeof data);

        if (data !== "null") setToDoList(JSON.parse(data));
        else setToDoList([]);
    }

    function updateLocalStorage() {
        // Lấy giá của listTask cập nhật lại cho local storage
        // console.log("🚀 ~ updateLocalStorage ~ toDoList:", toDoList);
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }

    function getListFilter() {
        const newList = toDoList ? [...toDoList] : [];
        if (valueFilter) {
            switch (valueFilter) {
                case "title":
                    return newList.sort((a, b) =>
                        a.nameTodo.localeCompare(b.nameTodo)
                    );

                case "quantity":
                    return newList.sort((a, b) => {
                        return a.quantity - b.quantity;
                    });

                case "status":
                    return newList.sort((a, b) => {
                        return a.status - b.status;
                    });
            }
        } else {
            return newList;
        }
    }

    useEffect(() => {
        // if (toDoList.length > 0) updateLocalStorage();
        console.log("kahsdas", toDoList);
        if (toDoList) {
            updateLocalStorage();
        }
    }, [toDoList]);

    useEffect(() => {
        // Read from localStorage
        getToDoList();
    }, []);

    return (
        <>
            <div className="app">
                <div className="header">
                    <h1>🏝️ Far Away 🧳</h1>
                </div>

                <div className="list">
                    <ControlAddTask handleAddTask={setToDoList} />

                    <ListTask
                        setToDoList={setToDoList}
                        toDoList={getListFilter()}
                    />

                    <ControlFilter
                        handleSetFilter={setValueFilter}
                        handleSetToDoList={setToDoList}
                    />

                    <Footer toDoList={toDoList} />
                </div>
            </div>
        </>
    );
}

export default App;
