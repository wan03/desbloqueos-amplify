import { render, cleanup } from "@testing-library/react";
import React from "react";

import FeaturedPhones from "./FeaturedPhones";


afterEach(() => {
 cleanup()
});


it("renders with or without content", () => {
  const{ container } = render(<FeaturedPhones />);

  expect(container.children).toBeTruthy();

});

