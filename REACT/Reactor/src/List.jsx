import propTypes from  'prop-types'
function List() {//props allow jsx to pass info from the page it is used in
   var hitlist = [ {name: "ace" ,status: "alive" , id:3},
                     {name:"karas",status: "alive", id:322} ,
                     {name:"rossa",status: "alive", id:3333} ,
                     {name:"orpheou",status: "alive", id:143},  ];
   // const hitlist = [ 'ace' , 'orpheous' , 'bahzanii']

   //sorts,reverse by swapping a and b
   hitlist.sort((a,b)  =>  a.name.localeCompare(b.name))//sorts alphabetically
   hitlist.sort((a,b)  =>  a.id - b.id)//sorts numerical

   // filtering keep those that met the condition
   hitlist = hitlist.filter(hitlist => hitlist.id > 100)

   const listItems = hitlist.map(hitlist => <li key={hitlist.name}>{hitlist.id} {hitlist.name} : {hitlist.status}</li>); //key is to identify the elenent to see what changed 

   return <ul>{listItems}</ul>;
  }
 
  export default List //export component out