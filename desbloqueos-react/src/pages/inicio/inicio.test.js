import { render, cleanup } from "@testing-library/react";
import React from "react";

import Inicio from "./Inicio";


afterEach(() => {
 cleanup()
});


it("renders with or without content", () => {
  const{ container } = render(<Inicio />);

  expect(container.children).toBeTruthy();

});