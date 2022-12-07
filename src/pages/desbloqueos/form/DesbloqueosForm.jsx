import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBStepper,
  MDBStep,
  MDBBtn,
  MDBInput,
  // MDBSelect,
} from '../../../shared/mdbreact/mdbreact';
import {
  formatForOptions, countries, networks, brands, devices,
} from './desbloqueosFormUtils';
import Select from '../../../components/formik/select/Select';

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

  const calculateAutofocus = (currentPanel) => {
    if (formActivePanel.formActivePanelChange
      && formActivePanel.formActivePanelId === currentPanel) {
      return true;
    }
    return false;
  };

  const [countriesOptions] = useState(formatForOptions(countries));
  const [networkOptions] = useState(formatForOptions(networks));
  const [brandOptions] = useState(formatForOptions(brands));
  const [devicesOptions] = useState(formatForOptions(devices));

  return (
    <MDBContainer>
      <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
        <strong>Desbloquea Tu Celular</strong>
      </h2>
      <MDBStepper icon>
        <MDBStep
          icon="city"
          stepName="Compañia Télefonica"
          onClick={() => swapFormActive(1)}
        />
        <MDBStep
          icon="mobile"
          stepName="Personal Data"
          onClick={() => swapFormActive(2)}
        />
        <MDBStep
          icon="user"
          stepName="Terms and Conditions"
          onClick={() => swapFormActive(3)}
        />
        <MDBStep
          icon="check"
          stepName="Finish"
          onClick={() => swapFormActive(4)}
        />
      </MDBStepper>
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
          <MDBRow>
            {formActivePanel.formActivePanelId === 1 && (
            <MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4">
                <strong>Pais y Operadora</strong>
              </h3>
              <Select
                name="country"
                options={countriesOptions}
                label="Pais"
              />
              <Select
                name="network"
                options={networkOptions}
                label="Compañia Télefonica"
              />
              <MDBBtn
                rounded
                className="float-right"
                onClick={() => handleNextPrevClick(2)}
              >
                Siguiente
              </MDBBtn>
            </MDBCol>
            )}

            {formActivePanel.formActivePanelId === 2 && (
            <MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4">
                <strong>Télefono</strong>
              </h3>
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
              <MDBBtn
                rounded
                className="float-left"
                onClick={() => handleNextPrevClick(1)}
              >
                Anterior
              </MDBBtn>
              <MDBBtn
                rounded
                className="float-right"
                onClick={() => handleNextPrevClick(3)}
              >
                Siguiente
              </MDBBtn>
            </MDBCol>
            )}

            {formActivePanel.formActivePanelId === 3 && (
            <MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4">
                <strong>Servicio de desbloqueo</strong>
              </h3>
              <MDBInput
                label="I agreee to the terms and conditions"
                type="checkbox"
                id="checkbox"
                autoFocus={() => calculateAutofocus(3)}
              />
              <MDBInput
                label="I want to receive newsletter"
                type="checkbox"
                id="checkbox2"
              />
              <MDBBtn
                rounded
                className="float-left"
                onClick={() => handleNextPrevClick(2)}
              >
                previous
              </MDBBtn>
              <MDBBtn
                rounded
                className="float-right"
                onClick={() => handleNextPrevClick(4)}
              >
                next
              </MDBBtn>
            </MDBCol>
            )}

            {formActivePanel.formActivePanelId === 4 && (
            <MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4">
                <strong>Finish</strong>
              </h3>
              <h2 className="text-center font-weight-bold my-4">
                Registration completed!
              </h2>
              <MDBBtn
                rounded
                className="float-left"
                onClick={() => handleNextPrevClick(3)}
              >
                previous
              </MDBBtn>
              <MDBBtn
                color="success"
                rounded
                className="float-right"
                onClick={() => handleSubmission()}
              >
                submit
              </MDBBtn>
            </MDBCol>
            )}
          </MDBRow>
        </Form>
      </Formik>
    </MDBContainer>
  );
}

export default DesbloqueosForm;
