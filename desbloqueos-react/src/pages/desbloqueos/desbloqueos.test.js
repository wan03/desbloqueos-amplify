import { render, cleanup } from "@testing-library/react";
import React from "react";

import Desbloqueos from "./Desbloqueos";


afterEach(() => {
 cleanup()
});


it("renders with or without content", () => {
  const{ container } = render(<Desbloqueos />);

  expect(container.children).toBeTruthy();

});
