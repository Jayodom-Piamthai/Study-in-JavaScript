import propTypes from  'prop-types'
function ListTemplate(props) {//props allow jsx to pass info from the page it is used in
   const category = props.category
   const items = props.items

   const listItems = items.map(items => <li key={items.name}>{items.id} {items.name} : {items.status}</li>); //key is to identify the elenent to see what changed 

   return (
    <>
        <h1>{category}</h1>
        <ul>{listItems}</ul>
    </>
   )
  }
ListTemplate.propTypes = {
    category: propTypes.string,
    items : propTypes.arrayOf(propTypes.shape({id: propTypes.number ,
                                                name: propTypes.string,
                                                status: propTypes.string}))
}
ListTemplate.defaultProps ={
    category : 'category',
    items : [{name: "NONE IN CATEGORY"}],
 }
  export default ListTemplate //export component out