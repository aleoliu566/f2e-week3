import React from 'react';
import './App.css';
import Album from './components/Album';
import Sidebar from './components/Sidebar';


function App() {
  const app={
    backgroundColor: "#FF8C6E",
    height: '100vh',
    textAlign: 'center',
  }
  return (
    <div style={app}>
      <Sidebar/>
      <Album/>
    </div>
  );
}

export default App;

