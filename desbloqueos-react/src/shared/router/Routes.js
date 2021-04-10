import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Inicio from "../../pages/inicio/Inicio";
import Acerca from "../../pages/acerca/Acerca";
import Contactanos from "../../pages/contactanos/Contactanos"
import Desbloqueos from "../../pages/desbloqueos/Desbloqueos"

function Routes () {
  return (
      <Switch>
        <Route path="/acerca">
          <Acerca />
        </Route>
        <Route path="/contactanos">
          <Contactanos />
        </Route>
        <Route path="/desbloqueos">
          <Desbloqueos />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
  );
}

export default Routes;