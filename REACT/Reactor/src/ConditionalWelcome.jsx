import propTypes from  'prop-types'
function Conditional(props) {//props allow jsx to pass info from the page it is used in
    const welcome = <h2 className="blue">Welcome to the site , {props.username}</h2>
    const unknown = <h2 className="red" >please login to continue</h2>
    // if(props.isLoggedIn){
    //     return<h2 className="blue">Welcome to the site , {props.username}</h2>
    // }
    // else{
    //     return <h2 className="red" >please login to continue</h2>)
    // }
    
    //shorter syntax
    return(props.isLoggedIn ? welcome : unknown);
  }
 
  export default Conditional //export component out