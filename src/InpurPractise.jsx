import React, { useState } from "react";

export default function InputPractise() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");



  const addItem = () => {
    let newArr = [...items, { title: title, body: body }];
    setItems(newArr);
    setTitle("");
    setBody("");
  };

  const handletitleclick = (e) => {
    setTitle(e.target.value);
  };
  const handlebodyclick = (e) => {
    setBody(e.target.value);
  };
  return (
    <div>
      <div>
        <label htmlFor="">Title</label>
        <input type="text" onChange={handletitleclick} value={title} />
      </div>
      <div>
        <label htmlFor="Body">Body</label>
        <tex
        tarea
          name=""
          id=""
          onChange={handlebodyclick}
          value={body}
        ></tex>
      </div>
      <button onClick={addItem}>Add items</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.title} | {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
