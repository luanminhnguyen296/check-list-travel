import React from "react";
import PropTypes from "prop-types";

function ControlFilter({ handleSetFilter, handleSetToDoList }) {
    return (
        <div className="action">
            <select onChange={(e) => handleSetFilter(e.target.value)}>
                <option value={""}>Sort by input order</option>
                <option value="title">Sort by description</option>
                <option value="quantity">Sort by quantity</option>
                <option value="status">Sort by packed status</option>
            </select>

            <button onClick={() => handleSetToDoList([])}>clear list</button>
        </div>
    );
}

ControlFilter.propTypes = {
    handleSetFilter: PropTypes.func,
    handleSetToDoList: PropTypes.func,
};

export default ControlFilter;
