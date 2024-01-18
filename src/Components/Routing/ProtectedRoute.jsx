import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoute({element, isLoggedin}) {
  return (
    isLoggedin ? element : <Navigate to='/login' replace={true} />

    // browser history [1,2,] 
  )
}

export default ProtectedRoute