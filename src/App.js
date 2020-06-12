import React from 'react';
import './App.css';
import Album from './components/Album';


function App() {
  const app={
    backgroundColor: "#FF8C6E",
    height: '100vh',
    textAlign: 'center',
  }
  return (
    <div style={app}>
      <Album/>
    </div>
  );
}

export default App;

