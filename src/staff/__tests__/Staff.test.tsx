import React from "react";
import { render } from "@testing-library/react";
import Staff from "../Staff";

describe("Staff", () => {
  it("renders", () => {
    const { container: received } = render(<Staff />);
    expect(received).toMatchSnapshot();
  });
});
