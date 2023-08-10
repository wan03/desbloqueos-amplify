/* eslint-disable max-len */
import {
  Card,
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
      <Card>
        <Typography>Sobre nosotros</Typography>
        <Typography>
          En Desbloquea tu cel, somos un equipo de expertos en desbloqueo de teléfonos inteligentes, brindando soluciones confiables y seguras que te permiten liberar todo el potencial de tus dispositivos móviles. Poseemos una pasión por la tecnología y aseguramos el compromiso de nuestro equipo con la satisfacción del cliente.
        </Typography>
      </Card>
      <Card>
        <Typography>Nuestra Misión</Typography>
        <Typography>
          Nuestra misión es simple pero poderosa: liberar la conectividad y la funcionalidad de tu teléfono inteligente. Creemos que todos los usuarios deberían tener la capacidad de usar su dispositivo con cualquier operador y aprovechar al máximo sus características únicas. Con este objetivo en mente, nos esforzamos cada día para ofrecer un servicio de desbloqueo de primera clase que sea rápido, seguro y efectivo.
        </Typography>
      </Card>
      <Card>
        <Typography>Experiencia</Typography>
        <Typography>
          Nuestro equipo está formado por profesionales altamente capacitados y apasionados por la tecnología móvil. Con años de experiencia en el campo del desbloqueo de teléfonos inteligentes, hemos dominado una amplia gama de marcas y modelos, lo que nos permite abordar incluso los desafíos más complejos con confianza y destreza.
        </Typography>
      </Card>
      <Card>
        <Typography>Compromiso con la Calidad</Typography>
        <Typography>
          En Desbloquea tu cel, la calidad es nuestra máxima prioridad. Utilizamos métodos y herramientas de vanguardia para garantizar que tu teléfono se desbloquee de manera segura y sin riesgos. Cada desbloqueo es llevado a cabo con precisión y cuidado, respetando la integridad de tu dispositivo.
        </Typography>
      </Card>
      <Card>
        <Typography>Atención personalizada</Typography>
        <Typography>
          Sabemos que cada cliente es único, y nuestro compromiso con la satisfacción del cliente refleja esta creencia. Nuestro equipo de atención al cliente está aquí para guiarte en cada paso del proceso, responder a tus preguntas y brindarte asesoramiento personalizado. Tu satisfacción es nuestra mayor recompensa.
        </Typography>
      </Card>
      <Card>
        <Typography>Únete a la Experiencia</Typography>
        <Typography>
          Si estás buscando un servicio de desbloqueo de teléfonos inteligentes confiable y eficiente, no busques más. En Desbloquea tu cel, estamos listos para brindarte soluciones que transformarán la forma en que usas tu dispositivo. Únete a nuestra creciente lista de clientes satisfechos y descubre la libertad de elegir.
        </Typography>
      </Card>
      <Typography>¡Gracias por elegir Desbloquea tu cel!</Typography>
    </Container>
  );
}

export default Acerca;
