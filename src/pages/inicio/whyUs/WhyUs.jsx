/* eslint-disable max-len */
import {
  Box, CardMedia, Grid, Typography,
} from '@mui/material';
import React from 'react';
import preciosImage from '../../../shared/image/3(6).png';
import atencionImage from '../../../shared/image/4(6).png';
import rapidoImage from '../../../shared/image/5(6).png';
import resultadosImage from '../../../shared/image/6(5).png';
import expertosImage from '../../../shared/image/7(5).png';
import flechaImage from '../../../shared/image/8(5).png';

function WhyUS() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={preciosImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
        <Typography color="white">Precios pensados para ti</Typography>
      </Grid>
      <Grid item>
        <Box sx={{ justifyContent: 'center' }}>
          <CardMedia component="img" image={flechaImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={atencionImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
        <Typography color="white">Atención en cada detalle</Typography>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={flechaImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={rapidoImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
        <Typography color="white">Rápido y seguro</Typography>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={flechaImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={resultadosImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
        <Typography color="white">Resultados garantizados</Typography>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={flechaImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={expertosImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
        <Typography color="white">Expertos en el area</Typography>
      </Grid>
    </Grid>
    /* <Grid container spacing={6}>
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
    */
  );
}
export default WhyUS;
