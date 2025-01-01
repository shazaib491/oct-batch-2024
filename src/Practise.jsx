import React from "react";

export default function Practise() {
  let users = [
    {
      name: "John",
      age: 20,
      email: "john@gmail.com",
    },
    {
      name: "Doe",
      age: 25,
      email: "doe@gmail.com",
    },
  ];

  const DataItem=(user, index)=>(
    <React.Fragment key={index}>
      <hr />
      <li>{user.name}</li>
      <li>{user.email}</li>
      <hr />
    </React.Fragment>
  )
  
  
  return (
    <>
      <h1>hello wolrd</h1>
      <ul>
        {users.map((user, index) => (
          <DataItem {...user} key={index} />
        ))}
      </ul>
    </>
  );
}
