import React from "react";
import { render } from "@testing-library/react";
import Staff from "../Staff";

describe( "Staff", () => {
  it( "Renders with defaults", () => {
    const { container: received } = render( <Staff /> );
    expect( received ).toMatchSnapshot();
  } );
  it( "Renders with sizes", () => {
    const { container: received } = render(
      <div style={{
        width: "100%",
        height: 100
      }}>
        <Staff
          width={"100%"}
          height={100}
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
    );
    expect( received ).toMatchSnapshot();
  } );
} );
