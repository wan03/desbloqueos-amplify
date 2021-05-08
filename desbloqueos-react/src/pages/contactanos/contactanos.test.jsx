import { render, cleanup } from "@testing-library/react";
import React from "react";

import Contactanos from "./Contactanos";


afterEach(() => {
 cleanup()
});


it("renders with or without content", () => {
  const{ container } = render(<Contactanos />);

  expect(container.children).toBeTruthy();

});
