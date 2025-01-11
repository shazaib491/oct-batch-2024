import React, { useEffect , useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';


export const  Userlist = ()=> {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate();


   useEffect(()=>{
    fetchUsers();
   }, []);

   const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user')
      console.log(response.data);
      setUsers(response.data);
      setLoading(false)
    } catch (error) {
      setError("failed to fetch user")
      setLoading(false)
      console.log(error)
    }
   };

   if(loading){
    return <p>Loading.</p>
   }
   if(error){
    return <p>{error}</p>
   }

   const editUser=(id)=>{
    console.log(id)
    navigate("/editBlogs/"+id);
   }
   
 
  const deleteUsers = async (id) =>{
   try {
     await axios.delete(`http://localhost:3000/user/${id}`);
     setUsers(users.filter(users => users.id!==id));

   } 
   catch (error) {
    setError("failed to delete user")
    setLoading(false)
    console.log(error)
   }
  }

  return (
    <div className="container mt-4">
    <h1 className="text-center mb-4">User List</h1>
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={user.id}>
          <div>
            <strong>{user.name}</strong> — {user.email}
          </div>
          <div>
          <button className="btn btn-primary btn-sm" onClick={() => editUser(user.id)}>
            Edit
          </button>
          <button className="btn btn-danger btn-sm ms-3" onClick={() => deleteUsers(user.id)}>
            Delete
          </button>
          </div>
          
        </li>
      ))}
    </ul>
  </div>
  )
}