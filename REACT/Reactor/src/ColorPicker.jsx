import propTypes from  'prop-types'
import React,{useState} from 'react';

function ColorPicker() {
    let [color,setColor] = useState("#0033ff") //rerender when second state is active and set the first state's

    let handleChange = (event) =>{ //function activate when event activated
        setColor(event.target.value);
    }
    return (
        <div>
            <p >selected color = {color}</p>
            <input type='color' onChange={handleChange}></input>
            <h1 className='colorTest' style={{backgroundColor: color}}>COLOR TEST!</h1>
        </div>
    )
  }
  export default ColorPicker //export component out