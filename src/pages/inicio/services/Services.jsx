import {
  CardMedia, Container, Grid, Typography,
} from '@mui/material';
import React from 'react';
import apple from '../../../shared/image/25(1).png';
import samsung from '../../../shared/image/22(1).png';
import huawei from '../../../shared/image/20(1).png';
import zte from '../../../shared/image/23(1).png';
import xiaomi from '../../../shared/image/21(1).png';
import alcatel from '../../../shared/image/24(1).png';
import lg from '../../../shared/image/26(1).png';
import tecno from '../../../shared/image/27(1).png';
import sony from '../../../shared/image/28(1).png';
import blackberry from '../../../shared/image/29(1).png';
import motorola from '../../../shared/image/19(1).png';

function Servicios() {
  return (
    <Container sx={{
      display: 'flex', flexDirection: 'column', gap: '60px', padding: '20px',
    }}
    >
      <Typography variant="h5" color="white" textAlign="center">
        Resultados efectivos con la marca que desees
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 2 }} justifyContent="center" sx={{ display: 'flex', gap: '20px' }}>
        <Grid
          item
          xs={2}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={apple} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
        <Grid
          item
          xs={2}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={samsung} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
        <Grid
          item
          xs={2}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={huawei} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={zte} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={xiaomi} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={alcatel} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={lg} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={tecno} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={sony} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={blackberry} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10%',
          }}
        >
          <CardMedia component="img" image={motorola} alt="precios competitivos.img" sx={{ width: { sm: 150, xs: 125 }, height: { sm: 150, xs: 125 } }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Servicios;
