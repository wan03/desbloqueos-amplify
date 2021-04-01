import { render, cleanup } from "@testing-library/react";
import React from "react";

import Acerca from "./Acerca";


afterEach(() => {
 cleanup()
});


it("renders with or without content", () => {
  const{ container } = render(<Acerca />);

  expect(container.children).toBeTruthy();

});
