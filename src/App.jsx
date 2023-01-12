import React from 'react';
import { Amplify } from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Layout from './pages/layout/Layout';
import awsExports from './aws-exports';
import Acerca from './pages/acerca/Acerca';
import Contactanos from './pages/contactanos/Contactanos';
import Desbloqueos from './pages/desbloqueos/Desbloqueos';
import Inicio from './pages/inicio/Inicio';
import Telefonos from './pages/telefonos/Telefonos';
import DetailsPhone from './pages/telefonos/detailsPhone/DetailsPhone';
import IniciarSesion from './pages/iniciarSesion/IniciarSesion';
import Register from './pages/registrarse/Register';

Amplify.configure(awsExports);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/acerca" element={<Acerca> </Acerca>}> </Route>
          <Route path="/contactanos" element={<Contactanos> </Contactanos>}> </Route>
          <Route path="/desbloqueos" element={<Desbloqueos> </Desbloqueos>}> </Route>
          <Route path="/" element={<Inicio> </Inicio>}> </Route>
          <Route path="/telefonos" element={<Telefonos> </Telefonos>}> </Route>
          <Route path="/telefonos/:id" element={<DetailsPhone />} />
          <Route path="/login" element={<IniciarSesion />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
