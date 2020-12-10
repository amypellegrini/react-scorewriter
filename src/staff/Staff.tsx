import React from "react";

import "./Staff.css";

/**
 * We're extending Staff with SVGAttributes to keep DRY
 */
export interface StaffProps extends React.SVGAttributes<HTMLOrSVGElement> {
}

export default function Staff( {
  x = 0,
  y = 0,
  viewBox = `0 0 100 100`,
  height = "100",
  width = "100",
  preserveAspectRatio = "none"
}: StaffProps ) {
  return (
    <svg
      data-testid="staff"
      x={x}
      y={y}
      viewBox={viewBox}
      width={width}
      height={height}
      preserveAspectRatio={preserveAspectRatio}
    >
      <line
        x1="0"
        y1="1"
        x2="100"
        y2="1"
        strokeWidth="1"
        stroke="black"
      />
      <line
        x1="0"
        y1="25"
        x2="100"
        y2="25"
        strokeWidth="1"
        stroke="black"
      />
      <line
        x1="0"
        y1="50"
        x2="100"
        y2="50"
        strokeWidth="1"
        stroke="black"
      />
      <line
        x1="0"
        y1="75"
        x2="100"
        y2="75"
        strokeWidth="1"
        stroke="black" />
      <line
        x1="0"
        y1="99"
        x2="100"
        y2="99"
        strokeWidth="1"
        stroke="black"
      />
    </svg>
  );
}
