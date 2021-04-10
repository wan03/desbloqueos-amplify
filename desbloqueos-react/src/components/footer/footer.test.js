import { render, cleanup } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from "./Footer";


afterEach(() => {
 cleanup()
});


it("renders", () => {
  const{ getByText } = render(<Router><Footer /></Router>);

  expect(getByText("Inicio")).toBeTruthy();

});