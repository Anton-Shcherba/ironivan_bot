import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const socket = io('ws://localhost:5678');

function App(): JSX.Element {
  // const { user } = window.Telegram.WebApp.initDataUnsafe
  const [connection, setConnection] = useState<boolean>(false);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    socket.on('message', data => {
      console.log(data);
      setMessages(prevMessages => [...prevMessages, data]);
    });

    socket.on('connect', () => {
      setConnection(true);
    });

    socket.on('disconnect', () => {
      setConnection(false);
    });
  }, []);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const messageInput = event.currentTarget.elements.namedItem('message') as HTMLInputElement;
    if (messageInput) {
      const message = messageInput.value;
      socket.emit('message', message);
      messageInput.value = '';
    }
  };

  return (
    <div className="App">
      {/* <p>{user?.id ? user.id : 'bad_id'}</p> */}
      <p>{connection ? 'connected' : 'not connected'}</p>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button>Отправить</button>
      </form>
      <div></div>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}

export default App;
