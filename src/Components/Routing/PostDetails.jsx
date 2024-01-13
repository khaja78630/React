import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

function PostDetails(props) {
    const params = useParams();
    console.log('params id', params.postId);
    const [post, setPost] = useState(null);
    // const [search, query] = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
//console.log('search params', searchParams.get('filter'));
const navigate = useNavigate();


    useEffect(() => {
       
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then(response => {
            setPost(response.data);
        })
    },[])

    return (<>
        <div>
           
            {!post && <h4>Loading...</h4>}
        </div>
        {post && <div>ProductsDetails

            <p>Title : {post.title}</p>
            <p>Body : {post.body}</p>
       <button onClick={() => navigate('/posts')}>Back</button>
        </div>}

    </>
    )
}

export default PostDetails