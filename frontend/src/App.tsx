import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('ws://localhost:5678');

function App(): JSX.Element {
  // const { user } = window.Telegram.WebApp.initDataUnsafe
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    socket.on('message', (data) => {
      console.log(data)
      setMessages((prevMessages) => [...prevMessages, data]);
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
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button>Отправить</button>
      </form>
    </div>
  );
}

export default App;
