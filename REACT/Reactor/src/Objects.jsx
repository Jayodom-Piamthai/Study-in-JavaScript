import propTypes from  'prop-types'
import { useState } from 'react'
function Objects(props) {//props allow jsx to pass info from the page it is used in
   const category = props.category
   const items = props.items

   const [player,setplayer] = useState({name:'ACE',rank:3,round:20})
   function nameUpdate(event){
        setplayer({...player, name:event.target.value})
   }
   function rankUpdate(event){
        setplayer(player =>({ ...player, rank:event.target.value})) // update method
    }

   return (
    <>
        <p>{player.name} is now ranked {player.rank} on the board with highscore at {player.round} rounds</p>
        <input type='text' value={player.name} onChange={nameUpdate}></input>
        <input type='number' value={player.rank} onChange={rankUpdate}></input>
    </>
   )
  }

  export default Objects //export component out