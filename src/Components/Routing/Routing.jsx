import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import PageNotFound from './PageNotFound';
import Posts from './Posts';
import ErrorBoundary from '../ErrorBoundary';

import PostDetails from './PostDetails';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';



function Routing(props) {
  
    return (
      <ErrorBoundary>
        <Routes>

          <Route path="/" element={<Home />}>


          </Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
          {/* <Route path="posts" element={<Posts />}></Route> */}
          <Route path="posts" element={<ProtectedRoute element={<Posts />} isLoggedin={props.isLoggedin} />}></Route>
          <Route path="posts/:postId" element={<PostDetails />}></Route>
          <Route path="login" element={<Login setIsLoggedin={props.setIsLoggedin} />}></Route>





          <Route path="*" element={<PageNotFound />}></Route>

        </Routes>
      </ErrorBoundary>
  )
}

export default Routing