import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box, Button, Checkbox, Container, FormControlLabel, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  formatForOptions, countries, networks, brands, devices,
} from './desbloqueosFormUtils';
import Select from '../../../components/formik/select/Select';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
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
  const { active, completed, className } = props;

  const icons = {
    1: 'hola',
    2: 'hola',
    3: 'hola',
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ['Selecciona tu pais', 'Selecciona tu telefono', 'terminos y condiciones'];

function DesbloqueosForm() {
  const [formActivePanel, setFromActivePanel] = useState({
    formActivePanelId: 1,
    formActivePanelChange: false,
  });
  const swapFormActive = (active) => {
    setFromActivePanel({
      formActivePanelId: active,
      formActivePanelChange: true,
    });
  };

  const handleNextPrevClick = (active) => {
    setFromActivePanel({
      formActivePanelId: active,
      formActivePanelChange: true,
    });
  };
  const handleSubmission = () => {
    // eslint-disable-next-line no-alert
    alert('Form submitted!');
  };
  const [countriesOptions] = useState(formatForOptions(countries));
  const [networkOptions] = useState(formatForOptions(networks));
  const [brandOptions] = useState(formatForOptions(brands));
  const [devicesOptions] = useState(formatForOptions(devices));

  return (
    <Container>
      <Typography variant="h6"> Desbloquea tu celular </Typography>
      <Box>
        <LocationCityIcon name="Compañia Télefonica" onClick={() => swapFormActive(1)} />
        <LocalPhoneIcon name="Personal Data" onClick={() => swapFormActive(2)} />
        <PersonIcon name="Terms and Conditions" onClick={() => swapFormActive(3)} />
        <CheckCircleIcon name="Finish" onClick={() => swapFormActive(4)} />
      </Box>
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
          <Container>
            {formActivePanel.formActivePanelId === 1 && (
              <Box sx={{ maxWidth: 300 }}>
                <Typography variant="h6"> Pais y operadora </Typography>
                <Select
                  name="country"
                  options={countriesOptions}
                  label="Pais"
                />
                <Select
                  name="network"
                  options={networkOptions}
                  label="Compañia telefonica"
                />
                <Button variant="contained" onClick={() => handleNextPrevClick(2)}> Siguiente </Button>
              </Box>
            )}
            {formActivePanel.formActivePanelId === 2 && (
              <Box sx={{ maxWidth: 300 }}>
                <Typography variant="h6"> Telefono </Typography>
                <Select
                  name="brand"
                  options={brandOptions}
                  label="Marca"
                />
                <Select
                  name="device"
                  options={devicesOptions}
                  label="Modelo"
                />
                <Button variant="contained" onClick={() => handleNextPrevClick(1)}> Anterior </Button>
                <Button variant="contained" onClick={() => handleNextPrevClick(3)}> Siguiente </Button>
              </Box>
            )}
            { formActivePanel.formActivePanelId === 3 && (
              <Box>
                <Typography variant="h6">
                  Servicios de desbloqueos
                </Typography>
                <FormControlLabel control={<Checkbox />} label="I agreee to the terms and conditions" id="checkbox" />
                <FormControlLabel control={<Checkbox />} label="I want to receive newsletter" id="checkbox2" />
                <Button variant="contained" onClick={() => handleNextPrevClick(2)}> Anterior </Button>
                <Button variant="contained" onClick={() => handleNextPrevClick(4)}> Siguiente </Button>
              </Box>
            )}
            { formActivePanel.formActivePanelId === 4 && (
              <Box>
                <Typography variant="h6">
                  Finish
                </Typography>
                <Typography>
                  Registration completed!
                </Typography>
                <Button variant="contained" onClick={() => handleNextPrevClick(3)}> Anterior </Button>
                <Button variant="contained" onClick={() => handleSubmission()}> Submit </Button>
              </Box>
            )}
          </Container>
        </Form>
      </Formik>
    </Container>
  );
}

export default DesbloqueosForm;
