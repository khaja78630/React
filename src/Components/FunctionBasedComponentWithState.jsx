import React, { useState } from 'react'

// <16.8
// hooks
function FunctionBasedComponentWithState() {

    const [userName, setUserName] = useState('');

    const [age, setAge]= useState(25);


    const [pwd, setPwd] = useState('');
    
    const [products, updateProducts] = useState([
        {id : 1, name: 'Mobile'},
        {id: 2, name:'laptop'}
    ])

    const [userNames, setUserNames] = useState(['Vinay', 'Khaja']) // [1, 2, 3]

    const [user, setUser] = useState({id : 1, name : 'Vinay', address : "HYD"})

    const updateAddress = () => {
        const currentUser = {...user};
        currentUser.address = "USA";
        setUser(currentUser);
    }

    const [productsList, setProductsList] = useState([
        {
            productDetails : {
                id : 1,
                Name: 'one plus pro'
            },
            manufacturerDetails : {
                id : 123,
                name: 'apple'
            },
            previousModels : ['one plus nord', 'ce lite']
        },
        {
            productDetails : {
                id : 1,
                Name: 'Samsung'
            },
            manufacturerDetails : {
                id : 345,
                name: 'Samsung'
            },
            previousModels : ['Galaxy']
        }
    ])

    const updateProductList = () =>{
        const currentList = [...productsList];
        currentList[0].manufacturerDetails.name = "one plus";
        for(let i=0; i<currentList.length;i++){
            if(currentList[i].manufacturerDetails.name == "one plus" && currentList[i].productDetails.id == 1){
                currentList[i].manufacturerDetails.name = "apple";
            }
        }
        currentList.map(product => {
            if(product.manufacturerDetails.name == "one plus" && product.productDetails.id == 1){
                product.manufacturerDetails.name = "apple";
            }
            return product; // [{},{}]
        });
        setProductsList(currentList);

    }

    const changeHandler = (e) => {
        if (e.target.name === 'userName') {
            setUserName(e.target.value);
        } else if (e.target.name === 'pwd') {
            setPwd(e.target.value);
        }

    }

    const submitForm = (e) => {
        alert(`username ${userName} and password is ${pwd}`);
    }

    const updateProductsList = () =>{
        const product = {
            id: 3,
            name: 'Camera'
        }
        const currentProducts = [...products]; // const result = [...products,product] => [{id : 1, name: 'Mobile'},  {id: 2, name:'laptop'}, {
            //id: 3,
           // name: 'Camera'
        //}]
        currentProducts.push(product);
        updateProducts(currentProducts);
    }

    const addUserName = () =>{ // memory reference ===> userNames    refernce == > userList
        if(userName){
            const userList = [...userNames];
            userList.push(userName);
            setUserNames(userList);
        }
    }
    return (
        <div>
        <form onSubmit={(e) => submitForm(e)}>
          <p>
              <label htmlFor='userName'>User Name</label>
              <input name='userName' type ="text" value={userName} onChange={(e) => changeHandler(e)}/>
          </p>
          <p>
              <label htmlFor='pwd'>Password</label>
              <input name='pwd' type ="password" value={pwd} onChange={(e) => changeHandler(e)}/>
          </p>
          <p>
              <button>Login</button>
          </p>
          // text area, dropdown
        </form>
            {
                products.map(product => {
                    return <div>
                        <p>Product id {product.id}</p>
                        <p>Product Name {product.name}</p>
                    </div>
                })
            }
            <button onClick={updateProductsList}>UpdateProducts</button>
            User Names:

            {
                userNames.map(userName => {
                    return (
                        <ul>
                            <li>{userName}</li>
                        </ul>
                    )
                })
            }
            <button onClick={addUserName}> Add User Name</button>
        </div>
      )
}

export default FunctionBasedComponentWithState