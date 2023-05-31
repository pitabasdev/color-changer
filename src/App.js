import { useState } from 'react';
import './App.css';


function App() {
  const [uiColor, setColor] = useState('');
  function handleChange(event) {
    setColor(event.target.value);
    console.log(event.target.value)
  }

  return (
    <div className='App'>
      <h2>COLOR CHANGER USING REACT JS</h2>
      <h1>{uiColor}</h1>
      <div className='app_color' style={{ background: `${uiColor}`, height: '400px', width: '400px', border: '1px solid black', position: 'relative', left: '730px', marginTop: '40px' }}>

      </div>
      <input type='text' onChange={handleChange}></input>

    </div>
  );
}

export default App;
