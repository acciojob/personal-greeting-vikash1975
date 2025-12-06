
import React,{useState} from "react";

function App(){
  const [name,setName]=useState("");

  return(
     <div style={{ padding: "20px" }}>
      <h2>Live Greeting App</h2>
      
      <input type="text"
             placeholder="Enter name"
             value={name}
             onChange={(e)=>setName(e.target.value)}
             />

             {name.trim() !== "" && <h3>Hello, ${name}!</h3>}
      
      </div>
  )
}
export default App;