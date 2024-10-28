import React, { useEffect, useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import Filter from "./Filter";

const App = () => {
  const [dataList, setDataList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [filter, setFilter] = useState("all");

  // Function to add a todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      return alert("Please Enter Title and Description");
    }

    const id = dataList.length ? dataList[dataList.length - 1].id + 1 : 1;

    const formData = {
      id,
      title,
      desc,
      completed: false,
    };

    const updatedList = [...dataList, formData];
    setDataList(updatedList);
    setTitle("");
    setDesc("");
  };

  // Function to remove a todo
  const handleRemove = (id) => {
    const newList = dataList.filter((data) => data.id !== id);
    setDataList(newList);
  };

  // Function to update a todo's completed status
  const handleUpdate = (id) => {
    const newList = dataList.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setDataList(newList);
  };

  // Function to filter the list
  const handleFilter = (filterText) => {
    setFilter(filterText);
  };

  // Update filteredList whenever dataList or filter changes
  useEffect(() => {
    if (filter === "pending") {
      setFilteredList(dataList.filter((data) => !data.completed));
    } else if (filter === "completed") {
      setFilteredList(dataList.filter((data) => data.completed));
    } else {
      setFilteredList(dataList);
    }
  }, [dataList, filter]);

  return (
    <>
      <h1 className="text-3xl font-bold p-3 text-center">Todo App</h1>
      <Form
        title={title}
        desc={desc}
        setTitle={setTitle}
        setDesc={setDesc}
        handleSubmit={handleSubmit}
      />
      <Filter
        handleFilter={handleFilter}
        filter={filter}
        setFilter={setFilter}
      />

      {filteredList.length > 0 ? (
        <div className="flex flex-wrap p-5">
          {filteredList.map((data) => (
            <Todo
              key={data.id}
              data={data}
              handleRemove={handleRemove}
              handleUpdate={handleUpdate}
            />
          ))}
        </div>
      ) : (
        <div className="p-10">
          <p className="text-center">Todo List is Empty..</p>
        </div>
      )}
    </>
  );
};

export default App;
