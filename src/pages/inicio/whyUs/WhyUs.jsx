/* eslint-disable max-len */
import {
  Box, CardMedia, Grid, Typography,
} from '@mui/material';
import React from 'react';
import imagenPrecio from '../../../shared/image/vectores para desbloquea tu cel .png';
import imagenExperiencia from '../../../shared/image/3(3).png';
import imagenGarantia from '../../../shared/image/7(8).png';
import imagenRapido from '../../../shared/image/6(8).png';
import imagenAtencion from '../../../shared/image/Desbloquea tu cel.png';
// import PropTypes from 'prop-types';
/* son los parametro de la funcion
{ whyUsTitle, whyUsReasons }
*/

function WhyUS() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={imagenPrecio} alt="precios competitivos.img" sx={{ width: { sm: 100, xs: 75 }, height: { sm: 100, xs: 75 } }} />
        </Box>
        <Typography style={{ fontFamily: 'Sono, sans-serif', padding: '20px' }} align="center">
          Precios competitivos
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={imagenExperiencia} alt="Experiencia.img" sx={{ width: { sm: 150, xs: 100 }, height: { sm: 150, xs: 100 } }} />
        </Box>
        <Typography style={{ fontFamily: 'Sono, sans-serif', padding: '20px' }} align="center">
          Experiencia y conocimientos
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={imagenGarantia} alt="garantia.img" sx={{ width: { sm: 100, xs: 75 }, height: { sm: 100, xs: 75 } }} />
        </Box>
        <Typography style={{ fontFamily: 'Sono, sans-serif', padding: '20px' }} align="center">
          Garantía de éxito
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={imagenRapido} alt="rapido.img" sx={{ width: { sm: 100, xs: 75 }, height: { sm: 100, xs: 75 } }} />
        </Box>
        <Typography style={{ fontFamily: 'Sono, sans-serif', padding: '20px' }} align="center">
          Rápido y conveniente
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={imagenAtencion} alt="Atencion.img" sx={{ width: { sm: 100, xs: 75 }, height: { sm: 100, xs: 75 } }} />
        </Box>
        <Typography style={{ fontFamily: 'Sono, sans-serif', padding: '20px' }} align="center">
          Atención al cliente excepcional
        </Typography>
      </Grid>

    </Grid>
  );
}
export default WhyUS;
