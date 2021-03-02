import React from "react";
import ReactDOM from "react-dom";
import {
  Switch,
  Route
} from "react-router-dom";
import Inicio from "../../pages/inicio/Inicio";
import Acerca from "../../pages/acerca/Acerca";
import Contactanos from "../../pages/contactanos/Contactanos"

function Routes () {
  return (
    <div>
      <Switch>
        <Route path="/acerca">
          <Acerca />
        </Route>
        <Route path="/contactanos">
          <Contactanos />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;