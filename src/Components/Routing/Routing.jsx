import React, { Component } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import PageNotFound from './PageNotFound';

import ErrorBoundary from '../ErrorBoundary';

import PostDetails from './PostDetails';

import Login from './Login';
import Users from './Users';
import InternalUsers from './InternalUsers';
import ExternalUsers from './ExternalUsers';

// import Posts from './Posts';

const Posts = React.lazy(() => import('./Posts'));
// import ProtectedRoute from './ProtectedRoute';
const ProtectedRoute = React.lazy(() => import('./ProtectedRoute'));

function Routing(props) {
  
    return (
      <ErrorBoundary>
        <Routes>

          <Route path="/" element={<Home />}>


          </Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
          {/* <Route path="posts" element={<Posts />}></Route> */}
          <Route path="posts" element={
          
          <React.Suspense fallback={<div>Loading ...</div>}>
          <ProtectedRoute element={
          

          <React.Suspense fallback={<div>Loading ...</div>}>
          <Posts />
          </React.Suspense>
          
          } 
          isLoggedin={props.isLoggedin} />
          </React.Suspense>
          }
          
          >

          </Route>
          <Route path="posts/:postId" element={<PostDetails />}></Route>
          {/* <Route path="login" element={props.isLoggedin ? <Navigate to='/' /> : <Login setIsLoggedin={props.setIsLoggedin} />}></Route> */}
          <Route path="login" element={ <Login setIsLoggedin={props.setIsLoggedin} />}></Route>



          <Route path='users' element={<Users />}>
          
          <Route path='internal' element={<InternalUsers />}></Route>
          <Route path='external' element={<ExternalUsers />}></Route>

          </Route>

          <Route path="*" element={<PageNotFound />}></Route>

        </Routes>
      </ErrorBoundary>
  )
}

export default Routing