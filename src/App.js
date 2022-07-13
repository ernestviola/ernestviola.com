import './styles/App.css';
import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Blogs from './components/blog/Blogs';
import Home from './components/home/Home';
import NotFound from './components/notfound/NotFound'
import Projects from './components/project/Projects';
import Login from './components/authorization/Login';
import Logout from './components/authorization/Logout';
import CheckUser from './components/authorization/CheckUser';

import CreateBlog from './components/blog/CreateBlog';


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
            <Route path='/createblog' element={<CreateBlog/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path ='/login' element={<Login/>} />
            <Route path ='/logout' element={<Logout/>} />

            <Route path ='/checkuser' element={<CheckUser/>} />
            <Route path ='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>

  );
}

export default App;
