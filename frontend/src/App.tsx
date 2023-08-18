import React from 'react';
import './App.css';

function App(): JSX.Element {

  const { user } = window.Telegram.WebApp.initDataUnsafe

  return (
    <div className="App">
      <p>{user?.id ? user.id : 'bad_id'}</p>
    </div>
  );
}

export default App;
