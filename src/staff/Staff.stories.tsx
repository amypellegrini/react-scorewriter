import React from "react";
import Staff from "./Staff";
import { storiesOf } from "@storybook/react";

storiesOf("Staff", module).add("default", () => {
  return (
    <div style={{ width: "100%" }}>
      <svg width="100%" viewBox="0 -1 2000 102">
        <Staff />
      </svg>
    </div>
  );
});
