function PressButton() {
    let count = 0;

    let clickUp = (e) => { //e for element
      count = count + 1;
      console.log('clicked')
      console.log(count)
      countUpdate(e)
    }
    const countUpdate= (e) => e.target.textContent = "clicked :" + count

    return(
      <>
      <button onClick={(e) => clickUp(e)}>clicked:{count}</button>
      </>
    );
  }
  export default PressButton //export component out