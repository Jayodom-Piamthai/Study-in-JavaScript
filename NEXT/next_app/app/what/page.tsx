import React from 'react';
import Globe from "../../public/globe.svg"
import Button from '../components/button';
function Card() {
  return(
    <div className="card">
      <img src={Globe}></img>
      <h2>CARDDDDDDDDDDD</h2>
      <p>card paragraph~</p>
      <Button></Button>
    </div>
  );
}
export default Card //export component out