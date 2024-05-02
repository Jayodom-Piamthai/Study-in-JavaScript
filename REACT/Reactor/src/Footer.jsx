//this is a react element function can be imported into the main file to be used
//theese things can use js methods still
function Footer() {
  let fruit = ["orange","banana"]//you can even use let in here!
    return(
      <footer>
        <p> &copy; {new Date().getFullYear()} ceexagon lolololol</p>
        <ul>
            <li>apple</li>
            <li>{fruit[0]}</li>
            <li>{fruit[1]}</li>

        </ul>
      </footer>
    );
  }
  export default Footer //export component out