import { cleanup, render } from "@testing-library/react";
import React from "react";

import Card from "./Card";

afterEach(() => {
  cleanup();
});

const mockData = {
    title: "Mock",
    text: "Hello",
    buttonText: "Button",
    buttonHref: "URL",
    imgSrc: "someSrc",
}



it("renders without data", () => {
  const { queryByRole } = render(<Card />);
    const title = queryByRole('heading');
  expect(title).not.toBeInTheDocument()


});

it("renders with data", () => {
  const { getByRole } = render(<Card {...mockData} />);
  const title = getByRole('heading');
  expect(title.textContent).toBe("Mock");
});

