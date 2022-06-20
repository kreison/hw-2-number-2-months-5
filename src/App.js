
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ADDTENACTION } from './redux/reducer';

function App() {
  const [input, setInput] = useState(0);
  const dispath = useDispatch();
  const ten = useSelector(state => state.addten)
  const sendNum = ()=>{
    dispath(ADDTENACTION(Number(input)))
    console.log(ten);
  }
  
  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} type="number" />
      <button onClick={sendNum}>submit</button>
      <div>{ten}</div>
    </div>
  );
}

export default App;
