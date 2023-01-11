import React, { useState } from 'react';
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
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  formatForOptions, countries, networks, brands, devices,
} from './desbloqueosFormUtils';
import Select from '../../../components/formik/select/Select';

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
    3: <PersonIcon name="Terms and Conditions" />,
    4: <CheckCircleIcon name="Finish" />,
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

const steps = ['Selecciona tu pais', 'Selecciona tu telefono', 'terminos y condiciones', 'Finalizado'];

function DesbloqueosForm() {
  const [formActivePanel, setFromActivePanel] = useState({
    formActivePanelId: 1,
    formActivePanelChange: false,
  });

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
    alert('Form submitted!');
  };
  const [countriesOptions] = useState(formatForOptions(countries));
  const [networkOptions] = useState(formatForOptions(networks));
  const [brandOptions] = useState(formatForOptions(brands));
  const [devicesOptions] = useState(formatForOptions(devices));

  return (
    <Container sx={{
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
                  />
                  <Select
                    name="network"
                    options={networkOptions}
                    label="Compañia telefonica"
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
                  />
                  <Select
                    name="device"
                    options={devicesOptions}
                    label="Modelo"
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: { xs: '10px', sm: '100px' }, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Button variant="contained" onClick={() => handleNextPrevClick(1)}> Anterior </Button>
                  <Button variant="contained" onClick={() => handleNextPrevClick(3)}> Siguiente </Button>
                </Box>
              </Card>
            )}
            { formActivePanel.formActivePanelId === 3 && (
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
                justifyContent: 'center',
                padding: '20px',
              }}
              >
                <Typography variant="h6">
                  Finish
                </Typography>
                <Typography textAlign="center">
                  Registration completed!
                </Typography>
                <Box sx={{ display: 'flex', gap: { xs: '10px', sm: '100px' }, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Button variant="contained" onClick={() => handleNextPrevClick(3)}> Anterior </Button>
                  <Button variant="contained" onClick={() => handleSubmission()}> Submit </Button>
                </Box>
              </Card>
            )}
          </Container>
        </Form>
      </Formik>
    </Container>
  );
}

export default DesbloqueosForm;
