import {
  Avatar, Box, Typography,
} from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { information } from '../../shared/api/memberInfomation';
import Navbar from '../../components/navbar/Navbar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1565c0',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Members() {
  return (
    <Box>
      <Navbar />
      <Grid container rowSpacing={4} spacing={4}>
        <Grid item xs={4}>
          <Box align="center" color="white" borderRadius="15px" sx={{ background: '#1565c0' }} padding={4}>
            <Avatar sx={{ width: 100, height: 100 }} src={information.profilePictures} />
            <Typography>
              {
              information.name
              }
            </Typography>
            <Typography>
              Email:
              { information.email }
            </Typography>
            <Typography>
              Phone:
              {
              information.phone
              }
            </Typography>
            <Typography>
              Country:
              {
              information.country
              }
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            align="center"
            color="white"
            borderRadius="5px"
            sx={{
              background: '#1565c0', display: 'flex', flexDirection: 'column', gap: '30px',
            }}
            padding={4}
          >
            <Typography variant="h4"> Servicios Disponibles </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
              {
                information.availableServices.map((item) => (
                  <Box>
                    <Typography variant="h6">
                      {
                      item.name
                      }
                    </Typography>
                    <Box component="img" src={item.image} height={100} />
                  </Box>
                ))
              }
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box align="center" color="white" borderRadius="15px" sx={{ background: '#1565c0' }} padding={4}>
            <Typography variant="h6"> Conexiones </Typography>
            <Typography>
              Conexiones realizadas:
              {
                information.connections.length
              }
            </Typography>
            <Typography>
              ultima conexion:
              {
                information.connections[0].day
              }
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Numero de telefono</StyledTableCell>
                    <StyledTableCell align="center">Compañia</StyledTableCell>
                    <StyledTableCell align="center">Pais</StyledTableCell>
                    <StyledTableCell align="center">modelo del telefono</StyledTableCell>
                    <StyledTableCell align="center">imei</StyledTableCell>
                    <StyledTableCell align="center">Estado</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {information.unlockedPhones.map((row) => (
                    <StyledTableRow key={row.phone}>
                      <StyledTableCell component="th" scope="row">
                        {row.phone}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.company}</StyledTableCell>
                      <StyledTableCell align="center">{row.country}</StyledTableCell>
                      <StyledTableCell align="center">{row.modelPhone}</StyledTableCell>
                      <StyledTableCell align="center">{row.imei}</StyledTableCell>
                      <StyledTableCell align="center">{row.statusUnlocked}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Members;
