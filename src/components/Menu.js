import React,{useContext} from 'react';
import { QContext } from './Context';
import "../App.css"
const Menu=()=>{
    const {setQuizState, setUserName }=useContext(QContext);
  return (
    <div className='menu'>
         <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="John Doe"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
     <button onClick={()=>{setQuizState('quiz')}}>Start Quiz</button>
    
    </div>
  )
}

export default Menu;