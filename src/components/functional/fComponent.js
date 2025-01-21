import React, {useState, useEffect} from "react";


const FComponent = ({message}) => {
//on mount
// useState equivelent to state in Class components
const [count, setCount] = useState(0);
//useEffect equivalent to componentDidMount in Class components
useEffect(()=>{

  //cleanup acts like componentWillMount
  return ()=>{}
}, []);

//props example message is passed as a prop string "hello functional component"

//update state when the button is clicked
const handleClick = () => {
  setCount((prevCount) => prevCount + 1);
};

  // Render the component
  return (
    <div>
      <h1>{message}</h1>  {/* Prop */}
      <p>Count: {count}</p>  {/* State */}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default FComponent;