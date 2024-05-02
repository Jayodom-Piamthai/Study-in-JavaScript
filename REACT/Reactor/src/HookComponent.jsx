import propTypes from  'prop-types'
import React,{useState} from 'react';

function Hook() {
    let [count,setCount] = useState(0) //rerender when second state is active and set the first state's
    let countUp = () =>{
        
        console.log('copunt up')
        setCount(count + 5);//activate setName state - not an update so it will activate only last one if stacked 
        setCount(count + 3)
        setCount(count + 1)
        setCount(count => count + 1);//update state function - can stack and activated in order,generally a better practice
        setCount(count => count + 1);//update state function - can stack 
        //this should increase count by 3 after clicked

    }
    let reset = () =>{
        setCount(0);//activate setName state
    }
    return (
        <div>
            <p> click amount: {count}</p>
            <button onClick={countUp}>count up</button>
            <button onClick={reset}>reset</button>
            
        </div>
    )
  }
  export default Hook //export component out