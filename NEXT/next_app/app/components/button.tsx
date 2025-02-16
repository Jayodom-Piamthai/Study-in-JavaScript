'use client'; //this will be render on client side to reduce the server load/make it up faster for client
import React from 'react';
function Button() {
  return(
    <div className="card">
      <button onClick={() => console.log('clicked!')}>click me!</button>
    </div>
  );
}
export default Button //export component out