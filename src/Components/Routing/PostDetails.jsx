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
const location = useLocation();
console.log('postdetails', location);


    // useEffect(() => {
       
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then(response => {
    //         setPost(response.data);
    //     })
    // },[])

    return (<>
        <div>
           
           
        </div>
        {location?.state?.length > 0 && <div>ProductsDetails

            <p>Title : {params?.postId && location?.state[params.postId].title}</p>
            <p>Body : {params?.postId && location?.state[params.postId].body}</p>
       <button onClick={() => navigate('/posts')}>Back</button>
        </div>}

    </>
    )
}

export default PostDetails