import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (inputText.trim()) {
      // Send the inputText to the backend
    //   fetch('https://your-backend-url.com/chat', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ message: inputText }),
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log('Message sent:', data);
    //     })
    //     .catch(error => {
    //       console.error('Error sending message:', error);
    //     });
      console.log('message sent sucessfully:'+inputText)  
      // Clear the input field
      setInputText('');
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        className="chat-input"
        placeholder="Type your message..."
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default ChatInput;
