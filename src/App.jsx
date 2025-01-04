import React from 'react'
import { BrowserRouter, Routes, Route,Link,Outlet } from "react-router";
import Layout from './partials/Layout';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';

export default function App() {
  return (
    <BrowserRouter>
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


