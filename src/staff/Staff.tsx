import React from "react";

import "./Staff.css";

export type StaffProps = {
  x?: number;
  y?: number;
  viewBox?: string;
  height?: string;
  width?: string;
};

export default function Staff({
  x = 0,
  y = 0,
  viewBox = `0 0 100 100`,
  height = "100%",
  width = "100%"
}: StaffProps) {
  return (
    <svg
      data-testid="staff"
      x={x}
      y={y}
      viewBox={viewBox}
      width={width}
      height={height}
      // style={{ overflow: "visible" }}
    >
      <line
        x1="0"
        y1="1"
        x2={width}
        y2="1"
        strokeWidth="1"
        stroke="black"
      />
      <line
        x1="0"
        y1="3"
        x2={width}
        y2="3"
        strokeWidth="1"
        stroke="black"
      />
      <line
        x1="0"
        y1="5"
        x2={width}
        y2="5"
        strokeWidth="1"
        stroke="black"
      />
      <line
        x1="0"
        y1="7"
        x2={width}
        y2="7"
        strokeWidth="1"
        stroke="black" />
      <line
        x1="0"
        y1="9"
        x2={width}
        y2="9"
        strokeWidth="1"
        stroke="black"
      />
    </svg>
  );
}
