import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Products() {
    const params = useParams();
    const searchparam = useSearchParams();

  return (
    <div>Products</div>
  )
}

export default Products