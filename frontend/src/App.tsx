import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
// const socket = io('ws://localhost:5678');
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ReactTextTransition, { presets } from "react-text-transition";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const products = [['1181 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia'],
                  ['1182 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia'],
                  ['1183 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia'],
                  ['1184 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia'],
                  ['1185 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia'],
                  ['1186 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia'],
                  ['1187 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia'],
                  ['1188 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia'],
                  ['1189 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia'],
                  ['1190 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia'],
                  ['1191 ПИЖАМА НЕБЕСНАЯ',"https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg", 'https://optlist.ru/company/karolinaopt/product/1182-pizhama-nebesnaia']]

function App(): JSX.Element {
  // const { user } = window.Telegram.WebApp.initDataUnsafe
  // const [connection, setConnection] = useState<boolean>(false);
  // const [messages, setMessages] = useState<any[]>([]);
  // const [data, setData] = useState<any>('');

  // useEffect(() => {
  //   socket.on('message', data => {
  //     console.log(data);
  //     setMessages(prevMessages => [...prevMessages, data]);
  //   });

  //   socket.on('data', data => {
  //     console.log(data);
  //     setData(JSON.stringify(data));
  //   });

  //   socket.on('connect', () => {
  //     setConnection(true);
  //   });

  //   socket.on('disconnect', () => {
  //     setConnection(false);
  //   });
  // }, []);
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const messageInput = event.currentTarget.elements.namedItem('message') as HTMLInputElement;
  //   if (messageInput) {
  //     const message = messageInput.value;
  //     socket.emit('message', message);
  //     messageInput.value = '';
  //   }
  // };

  return (
    <div className="App" style={{boxSizing: 'border-box', padding: 10,
    display:"flex", flexDirection: 'column',
    height: '100vh', width: '100vw'}}>
      {/* <p>{user?.id ? user.id : 'bad_id'}</p> */}
      <Paper sx={{p: 0.5, display:"flex", justifyContent:"center",
      alignItems:"center",   backgroundColor: grey[400]}} >
        <Paper sx={{p: 0.5, mr: 0.5}}  >
          <Avatar sx={{ width: 44, height: 44 }}>U</Avatar>
        </Paper>
        <Box display="flex" justifyContent="space-between" alignSelf="stretch"
             alignItems="center" flexDirection="column" flexGrow={1}>
          <Paper sx={{px: 0.5, alignSelf: "stretch"}} >
            <Typography variant="body1" align="center">user</Typography>
          </Paper>
          <Paper sx={{px: 0.5, alignSelf: "stretch"}} >
            <Typography variant="body1" align="center">
                not connected
            </Typography>
          </Paper>
        </Box>
      </Paper>
      <Paper sx={{p: 0.5, mb: 1, height:"100%", overflow: 'scroll',
      display:"flex", justifyContent:"space-evenly", flexWrap: "wrap",
      alignItems:"center", mt:1, backgroundColor: grey[400]}} >
        {products.map((p) =>
          <Card key={p.toString()} sx={{ maxWidth: 150, m: 0.5 }}>
            <CardMedia
              sx={{ height: 225, width: 150 }}
              image="https://s.optlist.ru/i/85/48/1787e1c7b1719275-8548-1-w150.jpg"
              title="1182 ПИЖАМА НЕБЕСНАЯ"
            />
            {/* <CardContent > */}
              <Typography sx={{p:1}} variant="body1"  >
                1182 ПИЖАМА НЕБЕСНАЯ
              </Typography>
            {/* </CardContent> */}
            {/* <CardActions>
              <Button size="small">Share</Button>
            </CardActions> */}
          </Card>
         )}
        {/* <Paper sx={{px: 0.5}} >
            <Typography variant="body1" align="center">Lobbies</Typography>
        </Paper> */}
      </Paper>
      <Button variant="contained">Помощь консультанта</Button>
    </div>
  );
}

export default App;
