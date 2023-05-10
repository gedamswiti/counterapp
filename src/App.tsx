import React,{useState , useEffect, useReducer} from 'react'; 
import "./App.scss"; 
const initialState = {count: 0}; 
 
function reducer(state:{count: number}, action:{type: string}) { 
  switch (action.type) { 
    case 'increment': 
      return {count: state.count + 1}; 
    case 'decrement': 
      return {count: state.count - 1}; 
    default: 
      throw new Error(); 
  } 
} 
 
const App = () => { 
  const [state, dispatch] = useReducer(reducer, initialState); 
 
 return( 
    <div className='width100'> 
      <span> test health app </span> 
    <> 
      Count: {state.count} 
      <br/> 
      <br/> 
      
 
      <button onClick={() => dispatch({type: 'decrement'})}>-</button> 
      <button onClick={() => dispatch({type: 'increment'})}>+</button> 
 
<div> 

<h1> add date of births</h1>
</div>

      <br></br>
      <input type="date"/>


      <br></br>
      <input type="date"/>
     </>
      </div> 



  
  );
}; 
export default App;
