import React,{useState} from 'react'

function Counter(props) {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
  return (
    <div>
        {props.render(count, increment)}
    </div>
  )
}

export default Counter