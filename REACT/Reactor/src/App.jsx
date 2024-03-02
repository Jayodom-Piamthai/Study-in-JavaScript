
//colored screen - missing import
//white screem - element error

//import all theese part to be use later 
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './modular/button.jsx'
import Info from './infoProp.jsx'
import Conditional from './ConditionalWelcome.jsx'
import List from './List.jsx'
import ListTemplate from './ListTemplate.jsx'
import PressButton from './PressButton.jsx'
import Hook from './HookComponent.jsx'


//for list demonstration
var hitlist = [ {name: "ace" ,status: "alive" , id:3},
                     {name:"karas",status: "alive", id:322} ,
                     {name:"rossa",status: "alive", id:3333} ,
                     {name:"orpheou",status: "alive", id:143},  ];
var blank = [];
function App() {
  return(
    <>
      <Header></Header>
      <Footer/> {/*hooks can also be writen like this */}
      <Button></Button>
      <Conditional isLoggedIn ={true} username='Ace'/>
      <Info name ={'ACE'} age = {33} isAlive ={true} />  {/*passing info for component to use*/}
      <Info/>
      <List/>
      {hitlist.length > 0 ? <ListTemplate items = {hitlist} category = "Hit List"/> : null}
      {/* {hitlist.length > 0 && <ListTemplate items = {hitlist} category = "Hit List"/>} alternate way */}
      <ListTemplate  category = "Blank"/>
      <PressButton/>
      <Hook/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>{/*DUPLICATION GOOOOOOOOOOOOOO */}
    </>
  );
}

export default App //export component out 
