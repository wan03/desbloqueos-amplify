import React from "react";
import { cleanup, render } from "@testing-library/react";

import Servicios from "./Services";

afterEach(() => {
  cleanup();
});

const mockData = [
  
]



it("renders", () => {
    
     const { getByText } = render(<Servicios />);
    let title = getByText('Servicios');
  expect(title).toBeTruthy();

});