import React from "react";

type StaffProps = {
  y?: number;
  width?: number;
};

export default function Staff({ y = 0, width = 2000 }: StaffProps) {
  return (
    <svg
      data-testid="staff"
      x="0"
      y={y}
      viewBox={`0 0 ${width} 101`}
      width={width}
      height={101}
      style={{ overflow: "visible" }}
    >
      <line x1="0" y1="0" x2={width} strokeWidth="2" y2="0" stroke="black" />
      <line x1="0" y1="25" x2={width} strokeWidth="2" y2="25" stroke="black" />
      <line x1="0" y1="50" x2={width} strokeWidth="2" y2="50" stroke="black" />
      <line x1="0" y1="75" x2={width} strokeWidth="2" y2="75" stroke="black" />
      <line
        x1="0"
        y1="100"
        x2={width}
        strokeWidth="2"
        y2="100"
        stroke="black"
      />
    </svg>
  );
}
