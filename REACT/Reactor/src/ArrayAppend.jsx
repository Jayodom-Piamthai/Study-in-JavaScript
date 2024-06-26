import propTypes from  'prop-types'
import { useState } from 'react'
function Array(props) {//props allow jsx to pass info from the page it is used in
   const category = props.category
   const items = props.items

   const [player,setplayer] = useState(['jay','rob','deang']);

   function arrayUpdate(){
        var newOne = document.getElementById('playerInput').value;
        setplayer(f => [...f,newOne])
        // player => player.append(newOne)
        document.getElementById('playerInput').value = ''
    }

   return (
    <>
        <ul>
            {player.map((player,index) => <li key={index}>{player}</li>)}
        </ul>
        <input id='playerInput' type='text' value={player.name} ></input>
        <button onClick={arrayUpdate}>update</button>

    </>
   )
  }

  export default Array //export component out