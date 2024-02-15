import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './ProductsActions';
import {updateProduct} from './updateProduct';


function ProductsDetails() {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        console.log('state', state.products);
        return state.products;
    })
    const [data, setData] = useState({
        id : '',
        title: ''
    })
    useEffect(() => {
        dispatch(getProducts());
    }, [])
    return (
        <div>ProductsDetails
            {
             state.map((product) =>{
                return <div>
                    <p>{product.id}</p>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    </div>
             })   
            }
            <h4> Update Product</h4>
            <p><input type='text' placeholder='enter product Id to update title' onChange={(e) => setData({...data, id : e.target.value})}></input></p>
            <p><input type='text' placeholder='enter product title' onChange={(e) => setData({...data, title : e.target.value})}></input></p>
            <button onClick={() => dispatch(updateProduct(data.id, data.title))}>Update Product</button>
        </div>
    )
}

export default ProductsDetails