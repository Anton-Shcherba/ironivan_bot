import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function App(): JSX.Element {
  const { user } = window.Telegram.WebApp.initDataUnsafe;

  return (
    <div className="App">
      <p>{user?.id ? user.id : 'bad_id'}</p>
      <div></div>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}

export default App;
