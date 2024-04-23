import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import hogarImage from '../img/hogar.png';
import { io } from 'socket.io-client';

const socket = io('http://54.160.154.177:4000', {});

const FourCards = () => {
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    socket.on('newMessage', (data) => {
      // Actualiza el estado con los nuevos datos del servidor
      setRoomData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 4, md: 6 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding={3}
    >
      <Grid item>
        <Card sx={{ width: '70vh', height: '40vh', backgroundColor: '#242E47' }}>
          <CardContent sx={{ padding: 2 }}>
            <Box sx={{ width: '60vh', height: '31vh', border: '7px solid #F5F5FA', padding: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" component="h2" sx={{ color: '#FF9843' }}>
                  ROOM {roomData && roomData.room_id}
                </Typography>
              </Box>
              <Box sx={{ padding: 2, display: 'flex', flexDirection: 'row' }}>
                <img src={hogarImage} alt="Peligro" style={{ marginTop: '5px', marginRight: '30px',width: '20vh', height: '20vh',}} />
                <Box >
                  <Typography variant="h5" component="h2" sx={{ color: '#86A7FC' }}>
                    Voltage: {roomData && roomData.voltage}
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ color: '#86A7FC' }}>
                    Current: {roomData && roomData.current}
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ color: '#86A7FC' }}>
                    Power: {roomData && roomData.power}
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ color: '#86A7FC' }}>
                    Energy: {roomData && roomData.energy}
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ color: '#86A7FC' }}>
                    Frequency: {roomData && roomData.frequency}
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ color: '#86A7FC' }}>
                    PF: {roomData && roomData.pf}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FourCards;