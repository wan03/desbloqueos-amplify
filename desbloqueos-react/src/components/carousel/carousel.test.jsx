import { render, cleanup } from "@testing-library/react";
import React from "react";

import Carousel from "./Carousel";


afterEach(() => {
 cleanup()
});


it("renders with or without content", () => {
  const{ container } = render(<Carousel />);

  expect(container.children).toBeTruthy();

});