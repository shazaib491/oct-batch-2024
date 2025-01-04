import React from 'react'
import { BrowserRouter, Routes, Route,Link,Outlet } from "react-router";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Team = () => <h1>Team Page</h1>;

// Parent Component
const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet renders the child route components */}
      <Outlet />
      <div>Footer</div>
    </div>
  );
};


export default function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


