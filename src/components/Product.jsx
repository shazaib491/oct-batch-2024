import React from "react";

export default function Product(props) {
  const handleDelete=(title)=>{
    props.handleDelete(title);
    
  } 

  const handleEdit=(title)=>{
    props.handleEdit(title);
  }

  return (
    <div className="container">
    <ul className="list-group">
      {props.list.map((item) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
          <div>
            <strong>{item.title}</strong>
            <p className="mb-0">{item.body}</p>
          </div>
          <div>
            <button className="btn btn-info rounded-circle" onClick={()=>handleEdit(item.title)}><i class="bi bi-pencil-fill"></i></button>
            &emsp; 
            <button className="btn btn-danger rounded-circle" onClick={()=>handleDelete(item.title)}><i class="bi bi-trash3-fill"></i></button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}
