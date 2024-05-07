import { useState } from "react";
export default function App() {
const [count, setCount] = useState(0);
 function  handleIncrement() {
    setCount (count + 1);
}
function handleDecrement () {
     setCount (count - 1)
}
return (
    <div>
        <h1> count is : {count}</h1>
        <button onClick = { handleIncrement }> Increment</button>
         <button onClick = { handleDecrement }> Decement </button>
    </div>
)
}

  
