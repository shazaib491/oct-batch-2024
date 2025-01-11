import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
export default function AddBlogs() {
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  const saveFormData=async(data)=>{
    try {
      const addUser=await axios.post('http://localhost:3000/user',data);
      console.log("user added")
      reset();
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container w-50">
      <form onSubmit={handleSubmit(saveFormData)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input {...register('name')} id="name"  type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="text" className="form-control" />
        </div>
        <div className="btn btn-group ">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="reset" className="btn btn-danger ms-3">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
