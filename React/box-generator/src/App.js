import { useState } from 'react';
import './App.css';
import Form from './components/form';
import BoxDisplay from './components/colorbox';

function App() {

  const [boxes, setBoxes] = useState([]);

  const createNewBox = (newBoxColor, newBoxSize) =>{
    console.log(newBoxColor)
    let newState = [...boxes, {color: newBoxColor, size: newBoxSize}]
    setBoxes(newState);
  }

  return (
    <div className="App">
      <Form onNewBox={createNewBox}/>
      <BoxDisplay boxes = {boxes} />
    </div>
  );
}

export default App;
