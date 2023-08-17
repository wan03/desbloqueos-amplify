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
      <Grid item xs={6} md={1}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={preciosImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
        <Typography color="white" textAlign="center">Precios pensados para ti</Typography>
      </Grid>
      <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box sx={{ justifyContent: 'center' }}>
          <CardMedia component="img" image={flechaImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
      </Grid>
      <Grid item xs={6} md={1}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={atencionImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
        <Typography color="white" textAlign="center">Atención en cada detalle</Typography>
      </Grid>
      <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={flechaImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
      </Grid>
      <Grid item xs={6} md={1}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={rapidoImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
        <Typography color="white" textAlign="center">Rápido y seguro</Typography>
      </Grid>
      <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={flechaImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
      </Grid>
      <Grid item xs={6} md={1}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={resultadosImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
        <Typography color="white" textAlign="center">Resultados garantizados</Typography>
      </Grid>
      <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={flechaImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
      </Grid>
      <Grid item xs={12} md={1}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia component="img" image={expertosImage} alt="precios competitivos.img" sx={{ width: { sm: 75, xs: 75 }, height: { sm: 75, xs: 75 } }} />
        </Box>
        <Typography color="white" textAlign="center">Expertos en el area</Typography>
      </Grid>
    </Grid>
  );
}
export default WhyUS;
