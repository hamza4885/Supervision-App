import React, { useState, lazy } from 'react';
import './DummyChatApp.css';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
const Sidebar = lazy(() => import('../Sidebar'))
const Navbar = lazy(() => import('../Home/Components/Navbar'))

const DummyChatApp = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [messages, setMessages] = useState([]);

  const theme = useTheme()

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleChangeRecipient = (event) => {
    setRecipient(event.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== '' && recipient.trim() !== '') {
      setMessages([...messages, { sender: 'You', recipient: recipient, message: message }]);
      setMessage('');
      setRecipient('');
      alert('Message sent!');
    } else {
      alert('Please enter both recipient and message.');
    }
  };

  return (
    <>
      <Box sx={{
        display: 'flex',
        backgroundColor: theme.palette.background.landingBG,
        overflow: 'hidden',
        height: '100vh'
      }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Navbar />

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
          
          }}>
            <div className="container">
              <div className="chat-box">
                <div className="header">Chat</div>
                <div className="message-list">
                  {messages.map((msg, index) => (
                    <div key={index} className="message">
                      <div className="sender">{msg.sender}</div>
                      <Box className="message-content"
                      >
                        <Box>To: {msg.recipient}</Box>
                        <Box sx={{
                          border: 1, borderRadius: 2,
                          widrh: '75%',
                          padding: 1,
                          backgroundColor: '#007bff',
                          color: '#fff'
                        }}
                        >
                          {msg.message}
                        </Box>
                      </Box>
                    </div>
                  ))}
                </div>
                <div className="input-fields">
                  <input
                    type="text"
                    placeholder="Recipient"
                    value={recipient}
                    onChange={handleChangeRecipient}
                  />
                  <textarea
                    placeholder="Type a message..."
                    value={message}
                    onChange={handleChangeMessage}
                  />
                  <button onClick={handleSubmit}>Send</button>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DummyChatApp;
