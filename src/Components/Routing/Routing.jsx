import React, { Component } from 'react'
import {Routes, Route } from 'react-router-dom';

import Home from './Home';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import PageNotFound from './PageNotFound';
import Products from './Products';
import ErrorBoundary from '../ErrorBoundary';


export class Routing extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<AboutUs />}></Route>
        <Route path="contactus" element={<ContactUs />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
       
        </Routes>
        </ErrorBoundary>
    )
  }
}

export default Routing