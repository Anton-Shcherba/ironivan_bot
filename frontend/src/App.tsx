import React, { useState, useEffect, useRef } from 'react';
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
// import ReactTextTransition, { presets } from "react-text-transition";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Slide from '@mui/material/Slide';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';

import dayjs from 'dayjs';
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

  const [checked, setChecked] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div
      className="App"
      style={{
        boxSizing: 'border-box',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
      }}
    >
      {/* <p>{user?.id ? user.id : 'bad_id'}</p> */}
      <Paper
        sx={{
          p: 0.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: grey[400],
          mb: 1,
        }}
      >
        <Paper sx={{ p: 0.5, mr: 0.5 }}>
          <Avatar sx={{ width: 44, height: 44 }}>U</Avatar>
        </Paper>
        <Box
          display="flex"
          justifyContent="space-between"
          alignSelf="stretch"
          alignItems="center"
          flexDirection="column"
          flexGrow={1}
        >
          <Paper sx={{ px: 0.5, alignSelf: 'stretch' }}>
            <Typography variant="body1" align="center">
              user
            </Typography>
          </Paper>
          <Paper sx={{ px: 0.5, alignSelf: 'stretch' }}>
            <Typography variant="body1" align="center">
              not connected
            </Typography>
          </Paper>
        </Box>
      </Paper>
      <Box ref={containerRef} sx={{ height: '100%', overflow: 'hidden' }}>
        <Paper
          elevation={0}
          sx={{
            mb: 1,

            height: '100%',
            // overflow: 'scroll',
            display: 'flex',
            justifyContent: 'left ',
            flexDirection: 'column',
            alignItems: 'center',

            backgroundColor: grey[400],
            position: 'relative',
          }}
        >
          <Card
            sx={{
              display: 'flex',
              width: 'calc(100% - 8px)',
              mt: 0.5,
              // alignItems: 'stretch'
            }}
          >
            <TextField multiline variant="outlined" size="small" fullWidth sx={{ m: 0.5 }} />
            <IconButton onClick={handleChange}>
              <EditIcon />
            </IconButton>
          </Card>
          <Slide
            direction="down"
            in={checked}
            mountOnEnter
            unmountOnExit
            container={containerRef.current}
          >
            <Card
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 'calc(100% - 24px)',
                height: 'calc(100% - 24px)',
                position: 'absolute',
                m: 0.5,
                p: 1,
              }}
            >
              <TextField multiline rows={4} label="Текст" size="small" />
              <IconButton onClick={handleChange}>
                <EditIcon />
              </IconButton>
              {/* <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <AccessTimeIcon />
              </IconButton> */}

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  p: 0.5,
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Basic date picker" defaultValue={dayjs('2022-04-17')} />
                  {/* <TimePicker
                    label="Basic time picker"
                    views={['hours', 'minutes', 'seconds']}
                    format="hh:mm:ss"
                    defaultValue={dayjs('2022-04-17T15:30:00')}
                  />
                  <DigitalClock defaultValue={dayjs('2022-04-17T15:30')} ampm={false} /> */}
                  <MultiSectionDigitalClock
                    defaultValue={dayjs('2022-04-17T15:30')}
                    ampm={false}
                    timeSteps={{ hours: 1, minutes: 1, seconds: 1 }}
                    views={['hours', 'minutes', 'seconds']}
                  />
                  {/* <TimeClock defaultValue={dayjs('2022-04-17T15:30')} ampm={false} /> */}
                </LocalizationProvider>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                <Button variant="outlined" startIcon={<CheckRoundedIcon />}>
                  Accept
                </Button>
                <Button variant="outlined" endIcon={<ClearRoundedIcon />}>
                  Cancel
                </Button>
              </Box>
            </Card>
          </Slide>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
