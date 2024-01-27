import PropTypes from "prop-types";
import React from "react";

function Footer({ toDoList = [] }) {
    const packedItems = toDoList?.filter((item) => item.status === true) || [];

    const getFooterContent = () => {
        if (packedItems.length === toDoList.length)
            return "You are ready to go! 🚀";
        else
            return `
            You have ${
                toDoList.length
            } item(s) in your packing list 🎒, and you already packed ${
                packedItems.length
            } (${(packedItems.length / toDoList.length).toFixed(2) * 100}%)`;
    };

    return (
        <div className="stats">
            {toDoList?.length > 0
                ? getFooterContent()
                : "Start adding some items to your packing list 🚀"}
        </div>
    );
}

Footer.propTypes = {
    toDoList: PropTypes.array,
};

export default Footer;
