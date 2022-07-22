import './styles/App.css';
import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";


import Home from './components/home/Home';
import NotFound from './components/notfound/NotFound'
import Projects from './components/project/Projects';

import Blog from './components/blog/Read'
import Blogs from './components/blog/Blogs';
import Createblog from './components/blog/Create';


import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/footer/Footer';

function App() {
  return (
      <div className='wrapper'>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog/:uuid' element={<Blog/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/blog/create' element={<Createblog/>} />

            <Route path='/projects' element={<Projects/>} />
            
            <Route path ='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>

  );
}

export default App;
