import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoute({element, isLoggedin}) {
  return (
    isLoggedin ? element : <Navigate to='/login' />
  )
}

export default ProtectedRoute