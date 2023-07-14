import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  IconButton,
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
}
  from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import { PATHS } from '../../shared/constants/Constants';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const drawer = (
    <Box>
      <Toolbar> </Toolbar>
      <Divider> </Divider>
      <List>
        {
          PATHS.map((item) => (
            <ListItem key={item.name}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText
                  primary={item.name}
                  onClick={() => {
                    navigate(item.path);
                    handleDrawerToggle();
                  }}
                >
                  hola
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
      <Toolbar> </Toolbar>
      <Toolbar> </Toolbar>
      <Divider> </Divider>
      <ListItem>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText
            onClick={() => {
              navigate('/login');
              handleDrawerToggle();
            }}
          >
            Iniciar Sesion / Registrarse
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (
    <div>
      <AppBar>
        <StyledToolbar>
          <IconButton color="otherColor" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleDrawerToggle}>
            <MenuIcon> </MenuIcon>
          </IconButton>
          <Typography variant="h6" width={{ xs: '90%', sm: '20%' }} textAlign="center"> Desbloquea tu celular </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {
              PATHS.map((item) => (
                <Button
                  key={item.name}
                  color="otherColor"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {item.name}
                </Button>
              ))
            }
          </Box>
          <Button
            color="otherColor"
            onClick={() => {
              navigate('/login');
            }}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Iniciar Sesion/Registrarse
          </Button>
        </StyledToolbar>
      </AppBar>
      <Toolbar> </Toolbar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
}

export default Navbar;
