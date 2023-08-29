import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { margin } from '@mui/system';

const socket = io('ws://localhost:5678');

function App(): JSX.Element {
  // const { user } = window.Telegram.WebApp.initDataUnsafe
  const [connection, setConnection] = useState<boolean>(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [data, setData] = useState<any>('');

  useEffect(() => {
    socket.on('message', data => {
      console.log(data);
      setMessages(prevMessages => [...prevMessages, data]);
    });

    socket.on('data', data => {
      console.log(data);
      setData(JSON.stringify(data));
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
    <div className="App" style={{margin: 10}}>
      {/* <p>{user?.id ? user.id : 'bad_id'}</p> */}
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Avatar sx={{ width: 42, height: 42 }}>U</Avatar>
        <Paper elevation={3} sx={{height: 26, lineHeight: '26px', p: 1,
        textAlign: 'center'}}>{connection ? data : 'not connected'}</Paper>
      </Stack>
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
