import propTypes from  'prop-types'
function Info(props) {//props allow jsx to pass info from the page it is used in
    return(
      <div className ="info">
        <p> name: {props.name}</p>
        <p> age: {props.age}</p>
        <p> alive: {props.isAlive ? "yes" : "no"}</p>
      </div>
    );
  }
  Info.propTypes = { //varr type
    name : propTypes.string,
    age : propTypes.number,
    isAlive : propTypes.bool,

  }
  Info.defaultProps = { //default value
    name : 'stranger',
    age : 'Unknown',
    isAlive : false,

  }
  export default Info //export component out