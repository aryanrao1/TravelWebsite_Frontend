import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ChatInput from './components/ChatInput';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Placeholder for chat messages */}
      <div className="chat-container">
      </div>
      <ChatInput />
    </div>
  );
}

export default App;
