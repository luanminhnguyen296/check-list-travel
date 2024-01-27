import React, { useState } from "react";
import PropTypes from "prop-types";

function ControlAddTask({ handleAddTask }) {
    const [inputValue, setInputValue] = useState("");
    const [inputQuantity, setQuantity] = useState(1);

    function handleOnSubmit(e) {
        e.preventDefault();
        if (inputValue) {
            handleAddTask((pre) => {
                return [
                    ...pre,
                    {
                        id: Date.now(),
                        quantity: inputQuantity,
                        nameTodo: inputValue,
                        status: false,
                    },
                ];
            });
            setInputValue(""); // Xóa giá trị nhập
        }
    }
    return (
        <form className="add-form" onSubmit={handleOnSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                onChange={(e) => {
                    setQuantity(e.target.value);
                }}
                value={inputQuantity}
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
    );
}

ControlAddTask.propTypes = {
    handleAddTask: PropTypes.func,
};

export default ControlAddTask;
