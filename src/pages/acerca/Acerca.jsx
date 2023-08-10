/* eslint-disable max-len */
import {
  Box,
  Container,
  Fab,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

function Acerca() {
  const navigate = useNavigate();

  const goContactanos = () => {
    navigate('/contactanos');
  };
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      padding: '30px',
    }}
    >
      <Typography variant="h5">
        Acerca
      </Typography>

      <Fab
        variant="extended"
        sx={{
          position: 'fixed', top: '120px', right: '45%', backgroundColor: '#2586AF', border: '8px solid #E1A73E', padding: '20px',
        }}
        size="large"
        onClick={goContactanos}
      >
        <Typography fontWeight="800"> Contactanos </Typography>
      </Fab>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <Typography variant="body1">
          En DesbloqueaTuCell, nos especializamos en desbloquear teléfonos inteligentes, brindándote la libertad de utilizar tu dispositivo con cualquier operador y aprovechar al máximo su potencial. Trabajamos con todas las marcas líderes del mercado, incluyendo Samsung, Apple, Huawei, Xiaomi, Motorola y muchas más.
        </Typography>
        <Typography variant="body1">
          Tenemos una amplia variedad de modelos y sistemas operativos, garantizando un desbloqueo seguro y eficiente. Ya sea que estés buscando liberar un Samsung Galaxy, un iPhone de Apple, un Huawei P30, un Xiaomi Mi 11 o cualquier otro modelo popular, ¡estamos aquí para ayudarte!
        </Typography>
        <Typography variant="body1">
          En DesbloqueaTuCell, entendemos que cada teléfono es único, y es por eso que utilizamos métodos y herramientas avanzadas para garantizar un desbloqueo exitoso sin comprometer la integridad de tu dispositivo. Nos enorgullece ofrecer un servicio rápido y conveniente, permitiéndote disfrutar de todas las características y funcionalidades de tu teléfono sin limitaciones.
        </Typography>
        <Typography variant="body1">
          No importa la marca o el modelo de tu teléfono inteligente, en DesbloqueaTuCell tenemos la experiencia y los conocimientos necesarios para desbloquearlo de manera segura y confiable. Contáctanos hoy mismo y descubre la libertad y flexibilidad que te ofrecemos para aprovechar al máximo tu teléfono inteligente
        </Typography>
      </Box>
    </Container>
  );
}

export default Acerca;
