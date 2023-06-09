import "./App.css";
import {useState, useEffect, useRef} from 'react';

function App() {
 const [count, setcounter] = useState(0)
 const [data, SetData] = useState('ram')
 function updateCount(){
  setcounter(count + 1)
 }
 function updateData(){
  SetData('usman')
 }
//  use effect 
    useEffect(()=>{
      console.log("Component mountend")
    }, [data])

    // what is useRef ? dom manipulate
    const refElement = useRef("")
    console.log(refElement)
    const [name, setName] = useState("Usman");
    function resetName(){
      setName("");
      refElement.current.focus()
    }
    function colorChange(){
      refElement.current.style.color="green"
    }

  return (
    <>
      <h1>Button Click {count}</h1>
      <button onClick={updateCount}>click me </button>
      <button onClick={updateData}>click me </button>
      <br/>
      <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={resetName}>reset</button>
      <button onClick={colorChange}>Color Chnage</button>

    </>
  );
}

export default App;
