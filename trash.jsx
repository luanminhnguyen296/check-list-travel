import React, { useEffect, useState } from "react";

const App = () => {
    const [listTask, setListTask] = useState([]);

    function getListTask() {
        // lấy dữ liệu từ local storage gán cho state listTask
    }

    function updateLocalStorage() {
        // Lấy giá của listTask cập nhật lại cho local storage
    }

    useEffect(() => {
        updateLocalStorage();
    }, [listTask]);

    useEffect(() => {
        getListTask();
    }, []);

    return (
        <div>
            <Header />

            <App>
                <FormAddTask handleSetListTask={setListTask} />
                <ListTask list={listTask} handleSetListTask={setListTask} />
                <FilterControl handleSetListTask={setListTask} />
                <Footer list={listTask} />
            </App>
        </div>
    );
};

export default App;
