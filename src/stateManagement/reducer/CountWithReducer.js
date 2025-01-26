import { useReducer } from "react";
import counterSlice, {initialState} from "./counterSlice";
import { increment, decrement, resetCount, setCount } from './actionCreators';

//3. Create the counter component
const CounterWithReducer = () => {
  // Step 4: Initialize useReducer with the reducer function and initial stat
  const [state, dispatch] = useReducer(counterSlice, initialState);

  const handleSet = (event) => {
    //set payload the value from the input
    const newValue = parseInt(event.target.value, 10);
    //check it
    if(!isNaN(newValue)){
       dispatch(setCount(newValue));
    } else {
      alert("Please enter a number. thx")
    };
  };

  // Button style
  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.3s ease",
  };

  // step 5: return JSX to render the counter and buttons
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>My current number is {state.count}</h1>

      <button 
        onClick={()=>{dispatch(increment())}}
        style={{...buttonStyle, backgroundColor: "#F44336", color: "white"}}  
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >Plus one</button>

      <button 
        onClick={()=>{dispatch(decrement())}}
        style={{...buttonStyle, backgroundColor:"#4CAF50", color: "white"}}
      >Minus One</button>

      <input 
        type="number" 
        placeholder="Set your fav #" 
        onChange={handleSet}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "2px solid #ccc",
          margin: "10px",
          fontSize: "16px",
        }}
      ></input>

      <button 
        onClick={()=>{dispatch(resetCount())}}
        style={{...buttonStyle, backgroundColor: "#111111", color: "white",}}
      >Reset to 222</button>
    </div>
  )
};

export default CounterWithReducer;