import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import peligroImage from '../img/peligro.png';
import { io } from 'socket.io-client';

const socket = io('http://54.160.154.177:4000');

const FourCards = () => {
  const [roomData, setRoomData] = useState(null);
  const [voltageColor, setVoltageColor] = useState('#86A7FC');
  const [powerColor, setPowerColor] = useState('#86A7FC');

  useEffect(() => {
    // Escucha mensajes del servidor
    socket.on('newMessage', (data) => {
      // Actualiza el estado con los nuevos datos del servidor
      setRoomData(data);
      // Cambia el color del voltaje si es menor a 100
      if (data.voltage < 100) {
        setVoltageColor('#FF0000'); // Rojo
      } else {
        setVoltageColor('#86A7FC'); // Azul
      }
      // Cambia el color de la potencia si es mayor a 1200
      if (data.power > 1200) {
        setPowerColor('#FF0000'); // Rojo
      } else {
        setPowerColor('#86A7FC'); // Azul
      }
    });

    // Limpiar la conexión cuando el componente se desmonta
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
                <img src={peligroImage} alt="Peligro" style={{ marginTop: '5px', marginRight: '30px', width: '20vh', height: '20vh' }} />
                <Box>
                  <Typography variant="h5" component="h2" sx={{ color: voltageColor }}>
                    Voltage: {roomData && roomData.voltage}
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ color: powerColor }}>
                    Power: {roomData && roomData.power}
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
