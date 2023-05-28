import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState("red")
  const [checked, setChecked] = useState(false)
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checked}
      >Change to {newButtonColor}</button>

      <input type="checkbox" onChange={(e) => { setChecked(e.target.checked) }} defaultChecked={checked} />
    </div >
  );
}

export default App;
