import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import Button from '../Button';
function Posts() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('filter');
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(

      response => {

        setPosts(response.data);
      })
  }, [])


  useEffect(() => {
    if (search === 'IdWithEven') {
      const postscopy = [...posts];
      const result = postscopy.filter((post) => {
        return post.id % 2 === 0
      });
      setPosts(result);
    }
    if (search === 'IdWithOdd') {
      const postscopy = [...posts];
      const result = postscopy.filter((post) => {
        return post.id % 2 !== 0
      });
      setPosts(result);
    }
    
  }, [search]);

  const handleOdd = () =>{
    const postscopy = [...posts];
        const result = postscopy.filter((post) => {
          return post.id % 2 === 0
        });
        setPosts(result);
  }

  return (
    <div style={{padding : '1rem'}}>Posts
User Name : {location?.state?.username}
      <button onClick={() => {
        setSearchParams({ filter: 'IdWithEven' })
        // const postscopy = [...posts];
        // const result = postscopy.filter((post) => {
        //   return post.id % 2 === 0
        // });
        // setPosts(result);


}}> Get Posts with user id even</button>

{/* <button onClick={() => {
        setSearchParams({ filter: 'IdWithOdd' })
        // const postscopy = [...posts];
        // const result = postscopy.filter((post) => {
        //   return post.id % 2 === 0
        // });
        // setPosts(result);


}}> Get Posts with user id odd</button> */}

<Button name="Get Posts with user id odd" action={handleOdd}/>

    {posts.length > 0 && 
    posts.map(post =>{
      return (
      <Link style={{display: 'block', textDecoration: 'none', padding: '10px'}} to={{pathname : `/posts/${post.id}` , state: {posts} } } state={posts}>{post.title}</Link>)
    })
    }
    <Outlet />
    </div>
  )
}

export default Posts