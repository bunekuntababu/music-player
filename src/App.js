import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <MusicPlayer />
      ) : (
        <HomePage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
