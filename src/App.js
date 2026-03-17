import React, { useState } from 'react';
import './App.css';

function App() {
  const [magicCount, setMagicCount] = useState(0);

  return (
    <div className="App" style={{ backgroundColor: '#282c34', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>✨ React + Azure Magic ✨</h1>
      <p>Deploying from VS Code directly to the Cloud!</p>
      
      <div style={{ padding: '20px', border: '2px solid #61dafb', borderRadius: '10px' }}>
        <h2>Magic Counter: {magicCount}</h2>
        <button 
          onClick={() => setMagicCount(magicCount + 1)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Cast Spell 🪄
        </button>
      </div>

      <p style={{ marginTop: '20px', color: '#61dafb' }}>
        Current Status: 🟢 Live on Azure Static Web Apps
      </p>
    </div>
  );
}

export default App;
