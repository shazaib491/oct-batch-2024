import React from 'react'
import { BrowserRouter,Routes, Route, Link, Outlet } from 'react-router'
import EditBlogs from './Components/EditBlogs'
import Layout from './Layout/Layout'
import { Userlist } from './Components/UserList'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddBlogs from './Components/AddBlogs'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Userlist />}  />
            <Route path='/addUser' index  element={<AddBlogs />} /> 
            <Route path='/editBlogs/:id' index  element={<EditBlogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


