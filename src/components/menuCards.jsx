import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import casaImage from '../img/casa.png';
import alertaImage from '../img/alerta.png';
import informeImage from '../img/luna.png';


const ThreeCards = () => {

    const navigate = useNavigate();

    const Rooms = () => {
        navigate('/rooms');
    };

    const Alertas = () => {
        navigate('/alertas');
    };

    const Informes = () => {
        navigate('/informes');
    };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding={5}
      sx={{ minHeight: '90vh' }} 
    >
      <Grid item>
      <Card sx={{ width: '50vh', height: '40vh', backgroundColor: '#635849', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onClick={Rooms}>
  <CardContent sx={{display: 'flex', flexDirection: 'column' }}>
    <Typography variant="h3" component="h2" sx={{ color: '#86A7FC'}}>
      ROOMS
    </Typography>
    <img src={casaImage} alt="Casa" style={{marginTop: '30px'}} />
  </CardContent>
</Card>
      </Grid>
      <Grid item>
      <Card sx={{ width: '50vh', height: '40vh', backgroundColor: '#3468C0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onClick={Alertas}>
  <CardContent sx={{display: 'flex', flexDirection: 'column' }}>
    <Typography variant="h3" component="h2" sx={{ color: '#FF9843' }}>
      ALERTAS
    </Typography>
    <img src={alertaImage} alt="Alerta" style={{ width: '25vh', height: '20vh', marginTop: '30px'}} />
  </CardContent>
        </Card>
      </Grid>
      <Grid item>
      <Card sx={{ width: '50vh', height: '40vh', backgroundColor: '#FFDD95', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onClick={Informes}>
  <CardContent sx={{display: 'flex', flexDirection: 'column' }}>
    <Typography variant="h3" component="h2" sx={{ color: '#000000' }}>
      INFORMES
    </Typography>
    <img src={informeImage} alt="Informe" style={{marginBottom: '-30px'}} />
  </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ThreeCards;
