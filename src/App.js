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

import Blogs from './components/blog/Blogs';
import Createblog from './components/blog/Create';
import Readblog from './components/blog/Read'
import Updateblog from './components/blog/Update';

import Login from './components/authorization/Login'
import Logout from './components/authorization/Logout'

import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/footer/Footer';

function App() {
  return (
      <div className='wrapper'>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/blog/create' element={<Createblog/>} />
            <Route path='/blog/:uuid' element={<Readblog/>} />
            <Route path='/blog/update/:uuid' element={<Updateblog/>} />

            <Route path='/projects' element={<Projects/>} />
            
            <Route path='/login' element={<Login/>} />
            <Route path='/logout' element={<Logout/>} />
            

            <Route path ='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>

  );
}

export default App;
