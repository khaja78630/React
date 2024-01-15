import React,{useContext} from 'react'
import UserContext from './UserContext';


function C(props) {
  const context = useContext(UserContext);

  return (
    <div>C 
        From C context value 
        {context && context.posts && context.posts.map(post =>
          <h4>{post.title}</h4>
        )
        
        }
    </div>
  )
}

export default C;