import React from "react";
import PropTypes from "prop-types";

function ListTask({ toDoList = [], setToDoList }) {
    function handleRemove(id) {
        const newList = toDoList.filter((i) => i.id !== id);
        setToDoList(newList);
    }

    function handleCheckboxChange(id) {
        const index = toDoList.findIndex((item) => item.id === id);

        if (index > -1)
            setToDoList((prv) => {
                prv[index].status = !prv[index].status;
                return [...prv];
            });
    }
    return (
        <ul className="todo-list">
            {toDoList?.map((item) => (
                <li key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.status || false}
                        onChange={() => handleCheckboxChange(item.id)}
                    />{" "}
                    <span className={item.status ? "done" : ""}>
                        {item.quantity}. &nbsp; {item.nameTodo}
                    </span>
                    <button onClick={() => handleRemove(item.id)}>❌</button>
                </li>
            ))}
            {(toDoList === null || toDoList?.length === 0) && <p>No Task</p>}
        </ul>
    );
}

ListTask.propTypes = {
    setToDoList: PropTypes.func,
    toDoList: PropTypes.array,
};

export default ListTask;
