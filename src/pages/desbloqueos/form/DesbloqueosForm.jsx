/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Card, Checkbox, Container, FormControlLabel, Stack, Step, StepLabel, Stepper, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Check from '@mui/icons-material/Check';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Pagar from '../../pagar/Pagar';
import Select from '../../../components/formik/select/Select';
import Input from '../../../components/payment/input/Input';
import SelectService from '../../servicios/input/SelectService';

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 10,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

QontoStepIcon.defaultProps = {
  active: false,
  className: '',
  completed: false,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const {
    active, completed, className, icon,
  } = props;

  const icons = {
    1: <LocationCityIcon name="Compañia Télefonica" />,
    2: <LocalPhoneIcon name="Personal Data" />,
    4: <PersonIcon name="Terms and Conditions" />,
    7: <CheckCircleIcon name="payment" />,
    6: <PaymentIcon name="Finish" />,
    3: <AppSettingsAltIcon name="services" />,
    5: <LocalPhoneIcon name="imei" />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

ColorlibStepIcon.defaultProps = {
  active: false,
  className: '',
  completed: false,
  icon: '',
};

const steps = ['Selecciona tu pais', 'Selecciona tu telefono', 'Servicio', 'Terminos y Condiciones', 'Imei', 'Pagar', 'Finalizado'];

function DesbloqueosForm() {
  const navigate = useNavigate();
  // handleCreateData();
  const [formActivePanel, setFromActivePanel] = useState({
    formActivePanelId: 1,
    formActivePanelChange: false,
  });

  const [countriesOptions, setCountriesOptions] = useState();
  const [networkOptions, setNetworkOptions] = useState();
  const [brandOptions, setBrandOptions] = useState();
  const [devicesOptions, setDevicesOptions] = useState();
  // const [networksOptionsFilter, setNetworksOptionsFilter] = useState();
  const opciones = useSelector((state) => state.opciones);
  const idTicket = opciones[11]?.id_ticket;

  const countries = () => {
    const URL = 'https://2pr78ypovg.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => setCountriesOptions(response.data))
      .catch((error) => error.data);
  };

  const networks = () => {
    const URL = 'https://omb7k0gyvj.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => setNetworkOptions(response.data))
      .catch((error) => error.data);
  };

  const brands = () => {
    const URL = 'https://mbt0pse1f1.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => setBrandOptions(response.data))
      .catch((error) => error.data);
  };

  const devices = () => {
    const URL = 'https://t4q0kvdhu4.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => setDevicesOptions(response.data))
      .catch((error) => error.data);
  };

  useEffect(() => {
    countries();
    networks();
    brands();
    devices();
  }, []);
  let opcionesNetworksFilter = [];
  if (opciones[0]?.idReg) {
    const opcionesNetworks = networkOptions?.filter((item) => item.countryDrSimID === opciones[0].idReg);
    // eslint-disable-next-line no-unused-vars
    opcionesNetworksFilter = opcionesNetworks;
  }
  let opcionesDevicesFilter = [];
  if (opciones[2]?.idReg) {
    const opcionesDevices = devicesOptions?.filter((item) => item.brandDrSimID === opciones[2].idReg);
    // eslint-disable-next-line no-unused-vars
    opcionesDevicesFilter = opcionesDevices;
  }
  const handleNextPrevClick = (active) => {
    setFromActivePanel({
      formActivePanelId: active,
      formActivePanelChange: true,
    });
  };

  const handleSubmission = () => {
    setFromActivePanel({
      formActivePanelId: formActivePanel.formActivePanelId + 1,
      formActivePanelChange: true,
    });
    // eslint-disable-next-line no-alert
    console.log('Form submitted!');
    navigate('/');
  };
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '50px',
    }}
    >
      <Typography variant="h6"> Desbloquea tu celular </Typography>
      <Stack sx={{ width: '100%' }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={formActivePanel.formActivePanelId - 1}
          connector={<ColorlibConnector />}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          {
            steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {
                    label
                  }
                </StepLabel>
              </Step>
            ))
          }
        </Stepper>
      </Stack>
      <Formik
        initialValues={{
          country: '',
          network: '',
          brand: '',
          device: '',

        }}
        validationSchema={Yup.object({
          country: Yup.string()
            .required('Requerido'),
          network: Yup.string()
            .required('Requerido'),
          brand: Yup.string()
            .required('Requerido'),
          device: Yup.string()
            .required('Requerido'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // eslint-disable-next-line no-alert
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Container sx={{
            width: { xs: '100%', sm: '60%' },
          }}
          >
            {formActivePanel.formActivePanelId === 1 && (
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                padding: '20px',
              }}
              >
                <Typography variant="h6"> Pais y operadora </Typography>
                <Box sx={{
                  display: 'flex',
                  gap: '30px',
                  padding: '20px',
                  justifyContent: 'center',
                  width: { xs: '100%', sm: '80%' },
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
                >
                  <Select
                    name="country"
                    options={countriesOptions}
                    label="Pais"
                    id={1}
                  />
                  <Select
                    name="network"
                    options={opcionesNetworksFilter}
                    label="Compañia telefonica"
                    id={2}
                  />
                </Box>
                <Button variant="contained" onClick={() => handleNextPrevClick(2)}> Siguiente </Button>
              </Card>
            )}
            {formActivePanel.formActivePanelId === 2 && (
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                padding: '20px',
              }}
              >
                <Typography variant="h6"> Telefono </Typography>
                <Box sx={{
                  display: 'flex',
                  gap: '30px',
                  padding: '20px',
                  justifyContent: 'center',
                  width: { xs: '100%', sm: '80%' },
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
                >
                  <Select
                    name="brand"
                    options={brandOptions}
                    label="Marca"
                    id={3}
                  />
                  <Select
                    name="device"
                    options={opcionesDevicesFilter}
                    label="Modelo"
                    id={4}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: { xs: '10px', sm: '100px' }, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Button variant="contained" onClick={() => handleNextPrevClick(1)}> Anterior </Button>
                  <Button variant="contained" onClick={() => handleNextPrevClick(3)}> Siguiente </Button>
                </Box>
              </Card>
            )}
            {formActivePanel.formActivePanelId === 3 && (
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                padding: '20px',
              }}
              >
                <Typography variant="h6"> Servicios </Typography>
                <Box sx={{
                  display: 'flex',
                  gap: '10px',
                  padding: '20px',
                  justifyContent: 'center',
                  width: '100%',
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
                >
                  <SelectService
                    name="tools"
                    label="Servicio"
                    id={7}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: { xs: '10px', sm: '100px' }, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Button variant="contained" onClick={() => handleNextPrevClick(2)}> Anterior </Button>
                  <Button variant="contained" onClick={() => handleNextPrevClick(4)}> Siguiente </Button>
                </Box>
              </Card>
            )}
            { formActivePanel.formActivePanelId === 4 && (
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                padding: '20px',
              }}
              >
                <Typography variant="h6">
                  Servicios de desbloqueos
                </Typography>
                <FormControlLabel control={<Checkbox />} label="I agreee to the terms and conditions" id="checkbox" />
                <FormControlLabel control={<Checkbox />} label="I want to receive newsletter" id="checkbox2" />
                <Box sx={{ display: 'flex', gap: { xs: '10px', sm: '100px' }, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Button variant="contained" onClick={() => handleNextPrevClick(3)}> Anterior </Button>
                  <Button variant="contained" onClick={() => handleNextPrevClick(5)}> Siguiente </Button>
                </Box>
              </Card>
            )}
            { formActivePanel.formActivePanelId === 5 && (
              // eslint-disable-next-line max-len
              <Input Next={handleNextPrevClick} />
            )}
            { formActivePanel.formActivePanelId === 6 && (
              <div>
                <Pagar next={handleNextPrevClick} />
              </div>
            )}
            { formActivePanel.formActivePanelId === 7 && (
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
              >
                <Typography variant="h6">
                  Finish
                </Typography>
                <Typography textAlign="center">
                  <strong>{`Solicitud Creada. Nro. Ticket: ${idTicket}.`}</strong>
                  <br />
                  <strong>Pronto estará recibiendo en su correo el estatus de su solicitud.</strong>
                </Typography>
                <Box sx={{ display: 'flex', gap: { xs: '10px', sm: '100px' }, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Button variant="contained" onClick={() => handleSubmission()}> Submit </Button>
                </Box>
              </Card>
            )}
          </Container>
        </Form>
      </Formik>
    </Box>
  );
}

export default DesbloqueosForm;
