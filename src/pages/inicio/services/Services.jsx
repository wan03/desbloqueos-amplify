import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import apple from '../../../shared/image/iPhone-logo.png';
import samsung from '../../../shared/image/logo-Samsung.png';
import huawei from '../../../shared/image/58ac4d880aaa10546adf2711.png';
import motorola from '../../../shared/image/Motorola-Logo-.png';
import xiaomi from '../../../shared/image/Xiaomi_logo_(2021-).svg.png';

function Servicios() {
  return (
    <Container sx={{
      display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px',
    }}
    >
      <Typography variant="h5">
        Marcas
      </Typography>
      <Grid container spacing={{ xs: 4, sm: 2 }} justifyContent="space-between">
        <Grid item xs={6} sm={2} component="img" src={apple} alt="apple.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        <Grid item xs={6} sm={2} component="img" src={samsung} alt="apple.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        <Grid item xs={6} sm={2} component="img" src={huawei} alt="apple.img" sx={{ width: { sm: 150, xs: 100 }, height: { sm: 150, xs: 100 } }} />
        <Grid item xs={6} sm={2} component="img" src={motorola} alt="apple.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        <Grid item xs={6} sm={2} component="img" src={xiaomi} alt="apple.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
      </Grid>
    </Container>
  );
}

export default Servicios;
