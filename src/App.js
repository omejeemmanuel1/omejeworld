import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Footer from './components/Footer';
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import "./App.css"



function App() {
  return (
   <div className='overflow-x-hidden'>
      <Router>
         <Routes>
           <Route path='/' exact element={<Home />} />
           <Route path='/post/:slug'  element={<SinglePost />} />
           <Route path='/post'  element={<Post />} />
         </Routes>
        <Footer />
        </Router>
    </div>
  );
}

export default App