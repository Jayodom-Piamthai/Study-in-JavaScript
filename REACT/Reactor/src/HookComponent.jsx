import propTypes from  'prop-types'
import React,{useState} from 'react';

function Hook() {
    let [name,setName] = useState() //rerender when second state is active
    let updateName = () =>{
        setName('jayson');//activate setName state
    }
    return (
        <div>
            <p> name: {name}</p>
            <button onClick={updateName}>whattttttt</button>
        </div>
    )
  }
  export default Hook //export component out