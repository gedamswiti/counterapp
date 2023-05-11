import { useState } from 'react'; 
import logo from './logo.svg'; 
import './App.css'; 
 
function App() { 
 
  const [details, setdetails] = useState(" First Name") 
  function updatedetails()  
  { 
    setdetails("gedam")   
  } 
   
  return ( 
    <div className="App"> 
     {details} 
     <br/> 
     <br/> 
     <button onClick={updatedetails}> 
      Tap To See   
     </button> 
 
    </div> 
  ) 
} 
 
 
export default App;
