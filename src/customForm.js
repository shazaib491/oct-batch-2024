import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [input,setInput]=useState("");
  const [nameErr,setNameErr]=useState("");

  function setInputValue(e){
    const {name,value}=e.target;
    console.log(value.length);
    if(value.length<3){
      setNameErr('Name must be at least 3 characters long!')
    }else{
      setNameErr('')
    }
    setInput({[name]:value})
  }

  function onSetBlur(e){
    const {name,value}=e.target;
    console.log(value.length);
    if(value.length==0){
      setNameErr('Name is Required')
    }else{
      setNameErr("");
  }
}

function submit(e){
  e.preventDefault();
  console.log(e.target.title.value)
  console.log(e.target.body.value)
  console.log(e.target)
  console.log(e);
}

  return (
    <div>
      <h1>New Title works</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt labore mollitia eligendi doloremque est earum, molestias necessitatibus quaerat atque pariatur minus praesentium possimus nemo vitae. Hic optio quos error?</p>
      <form onSubmit={submit}>
      <input type="text" name='title' onBlur={onSetBlur}  onChange={setInputValue} />
      <input type="text" name='body' onBlur={onSetBlur}  onChange={setInputValue} />
      <button className='btn btn-primary' type="submit">Submit</button>
      </form>
      <p className='text-danger'>{nameErr}</p>
    </div>
  )
}
