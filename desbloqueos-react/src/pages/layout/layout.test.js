import { render, cleanup } from "@testing-library/react";
import React from "react";

import Layout from "./Layout";


afterEach(() => {
 cleanup()
});


it("renders with or without content", () => {
  const{ container } = render(<Layout />);

  expect(container.children).toBeTruthy();

});