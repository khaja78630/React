import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import PageNotFound from './PageNotFound';
import Posts from './Posts';
import ErrorBoundary from '../ErrorBoundary';

import PostDetails from './PostDetails';

export class Routing extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Routes>

          <Route path="/" element={<Home />}>

          <Route path="about" element={<AboutUs />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
          <Route path="posts" element={<Posts />}>
          <Route path="posts/:postId" element={<PostDetails />}></Route> 
          </Route>
          </Route>
          
         
       
          <Route path="*" element={<PageNotFound />}></Route>

        </Routes>
      </ErrorBoundary>
    )
  }
}

export default Routing