import React from 'react';
import { Staff } from '..';
import Clef, { ClefName } from '../clef/Clef';
import KeySignature from '../key-signature';
import type {
  KeyQuality,
  KeySignature as KeySignatureType,
} from '../key-signature/KeySignature';

export type StaveProps = {
  clef: ClefName;
  keySignature?: KeySignatureType;
  keyQuality?: KeyQuality;
  children?: React.ReactNode;
  width?: string | number;
  x?: number;
  y?: number;
};

export default function Stave({
  clef,
  keySignature = 'C',
  keyQuality = 'major',
  children,
  width = '2000',
  x = 0,
  y = 0,
}: StaveProps) {
  return (
    <svg
      x={x}
      y={y}
      height="101"
      width={width}
      data-testid="stave"
      style={{ overflow: 'visible' }}
      viewBox={`0 0 ${width} 101`}
    >
      <Staff width={parseInt(width as string, 10)} />
      <Clef name={clef} x={20} y={clef === 'G-clef' ? -36 : 1} />
      <KeySignature
        x={99}
        y={clef === 'F-clef' ? 27 : 3}
        musicKey={keySignature}
        quality={keyQuality}
      />

      {children}
    </svg>
  );
}
