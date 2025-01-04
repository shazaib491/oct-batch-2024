import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function SubmitEvent(data) {
    console.log(data);
  }

  return (
    <div className="row">
      <div className="col-md-6 m-auto">
      <h1>New Title works</h1>
      <form onSubmit={handleSubmit(SubmitEvent)}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="form-control"
            {...register("title", { required: true })}
          />
          {errors.title && <span className="text-danger">name field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="form-control"
            {...register("body", { required: true })}
          />
          {errors.body && <span className="text-danger"> body is required</span>}
        </div>
        <div className="form-group">
        <label>Password</label>
        <input
        className="form-control"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
        className="form-control"
          {...register("confirmPassword", {
            required: "Please confirm your password",
          })}
          type="password"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
          <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      </div>
     
    </div>
  );
}
