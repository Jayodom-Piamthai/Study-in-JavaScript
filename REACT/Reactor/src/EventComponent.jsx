import propTypes from  'prop-types'
import React,{useState} from 'react';

function Event() {
    let [text,setText] = useState("stranger") //rerender when second state is active and set the first state's
    let [lenght,setLenght] = useState() //rerender when second state is active and set the first state's

    let handleChange = (event) =>{ //function activate when event activated
        setText(event.target.value);
    }
    return (
        <div>
            <input value = {text} onChange={handleChange}></input>
            <p >text input = {text}</p>
        </div>
    )
  }
  export default Event //export component out