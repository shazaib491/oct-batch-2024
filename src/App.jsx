import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Product from "./components/Product";
import { getAllBlogs } from "./services/blogs.service";

export default function App() {
  //parent
  const [items, setItems] = useState([]);
  const [blogs, setBlogs] = useState({ title: "", body: "" });
  const [mode, setMode] = useState("add");

  const addItem = () => {
    let newArr = [...items, blogs];
    setItems(newArr);
    setBlogs({ title: "", body: "" });
  };

  const updateItem = () => {
    const updatedList = items.map((element) => {
      if (element.title === blogs.title) {
        return blogs;
      }
      return element;
    });
    setItems(updatedList);
    setBlogs({ title: "", body: "" });
    setMode("add");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogs({ ...blogs, [name]: value });
  };

  const handleParentDelete = (title) => {
    const filteredListItem = items.filter((element) => element.title !== title);
    setItems(filteredListItem);
  };

  const handleParentEdit = (title) => {
    setMode("edit");
    const currentRecord = items.find((element) => element.title === title);
    setBlogs(currentRecord);
  };

  useEffect(() => {
    getAllBlogs().then((data) => {
      console.log(data);
      setItems(data);
      console.log("aman");
    });
  }, [mode]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Title
            </label>
            <Form.Control
              placeholder="Enter Title"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="title"
              onChange={handleInputChange}
              value={blogs.title}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="Body">
              Body
            </label>
            <textarea
              name="body"
              className="form-control"
              id=""
              onChange={handleInputChange}
              value={blogs.body}
            ></textarea>
          </div>
          <Button
            variant="primary"
            onClick={mode === "add" ? addItem : updateItem}
          >
            {mode === "add" ? "Add" : "Update"} items
          </Button>
        </div>
        <div className="col-md-6">
          <h1>List items</h1>
          {/* child component  */}
          <Product
            list={items}
            handleDelete={handleParentDelete}
            handleEdit={handleParentEdit}
          />
        </div>
      </div>
    </div>
  );
}
