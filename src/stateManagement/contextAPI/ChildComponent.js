import React, {useContext} from "react";
import { MyContext } from "./MyContext";

 const ChildComponent = () => {
  const user = useContext(MyContext);

  return(
    <div>
      Hello my name is
      <p>{user.name}</p>
      age:
      <p>{user.age}</p>
      and I love to count! 
    </div>
  )
}

export default ChildComponent;