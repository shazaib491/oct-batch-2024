import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <div>
        <Link to={'/'}>All Blogs</Link> 
        &emsp;
        <Link to={'/addUser'}>Add </Link>
        &emsp;

        <Link to={'/editBlogs'}>Edit</Link>
    </div>
  )
}
