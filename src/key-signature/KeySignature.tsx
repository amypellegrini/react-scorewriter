export type KeyQuality = 'major' | 'minor';

export type MajorKey =
  | 'C'
  | 'F'
  | 'B♭'
  | 'E♭'
  | 'A♭'
  | 'D♭'
  | 'G♭'
  | 'C♭'
  | 'G'
  | 'D'
  | 'A'
  | 'E'
  | 'B'
  | 'F#'
  | 'C#';

export type MinorKey =
  | 'C'
  | 'F'
  | 'B♭'
  | 'E♭'
  | 'A♭'
  | 'G'
  | 'D'
  | 'A'
  | 'E'
  | 'B'
  | 'F#'
  | 'C#'
  | 'D#'
  | 'G#'
  | 'A#';

export type KeySignature = MajorKey | MinorKey;

import React from 'react';
import Accidental from '../accidental';

const KeySignature = ({
  musicKey,
  quality = 'major',
  x = 0,
  y = 0,
}: {
  musicKey: KeySignature;
  quality: KeyQuality;
  x?: number;
  y?: number;
}): React.ReactElement => {
  if (
    (musicKey === 'F' && quality === 'major') ||
    (musicKey === 'D' && quality === 'minor')
  ) {
    return (
      <svg data-testid={`${musicKey}-${quality}-key-signature`} x={x} y={y}>
        <Accidental sign="flat" />
      </svg>
    );
  }

  if (
    (musicKey === 'B♭' && quality === 'major') ||
    (musicKey === 'G' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="flat" x="27" y="-37" />
        <Accidental sign="flat" />
      </svg>
    );
  }

  if (
    (musicKey === 'E♭' && quality === 'major') ||
    (musicKey === 'C' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="flat" x="54" y="12" />
        <Accidental sign="flat" x="27" y="-37" />
        <Accidental sign="flat" />
      </svg>
    );
  }

  if (
    (musicKey === 'A♭' && quality === 'major') ||
    (musicKey === 'F' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="flat" x="81" y="-25" />
        <Accidental sign="flat" x="54" y="12" />
        <Accidental sign="flat" x="27" y="-37" />
        <Accidental sign="flat" />
      </svg>
    );
  }

  if (
    (musicKey === 'D♭' && quality === 'major') ||
    (musicKey === 'B♭' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="flat" x="108" y="24" />
        <Accidental sign="flat" x="81" y="-25" />
        <Accidental sign="flat" x="54" y="12" />
        <Accidental sign="flat" x="27" y="-37" />
        <Accidental sign="flat" />
      </svg>
    );
  }

  if ((musicKey === 'G♭' && quality === 'major') || musicKey === 'E♭') {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="flat" x="135" y="-13" />
        <Accidental sign="flat" x="108" y="24" />
        <Accidental sign="flat" x="81" y="-25" />
        <Accidental sign="flat" x="54" y="12" />
        <Accidental sign="flat" x="27" y="-37" />
        <Accidental sign="flat" />
      </svg>
    );
  }

  if (musicKey === 'C♭' || (musicKey === 'A♭' && quality === 'minor')) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="flat" x="162" y="36" />
        <Accidental sign="flat" x="135" y="-13" />
        <Accidental sign="flat" x="108" y="24" />
        <Accidental sign="flat" x="81" y="-25" />
        <Accidental sign="flat" x="54" y="12" />
        <Accidental sign="flat" x="27" y="-37" />
        <Accidental sign="flat" />
      </svg>
    );
  }

  if (
    (musicKey === 'G' && quality === 'major') ||
    (musicKey === 'E' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="sharp" y="-42" />
      </svg>
    );
  }

  if (
    (musicKey === 'D' && quality === 'major') ||
    (musicKey === 'B' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="sharp" y="-42" />
        <Accidental sign="sharp" x="30" y="-5" />
      </svg>
    );
  }

  if (
    (musicKey === 'A' && quality === 'major') ||
    (musicKey === 'F#' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="sharp" y="-42" />
        <Accidental sign="sharp" x="30" y="-5" />
        <Accidental sign="sharp" x="60" y="-54" />
      </svg>
    );
  }

  if (
    (musicKey === 'E' && quality === 'major') ||
    (musicKey === 'C#' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="sharp" y="-42" />
        <Accidental sign="sharp" x="30" y="-5" />
        <Accidental sign="sharp" x="60" y="-54" />
        <Accidental sign="sharp" x="90" y="-17" />
      </svg>
    );
  }

  if (
    (musicKey === 'B' && quality === 'major') ||
    (musicKey === 'G#' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="sharp" y="-42" />
        <Accidental sign="sharp" x="30" y="-5" />
        <Accidental sign="sharp" x="60" y="-54" />
        <Accidental sign="sharp" x="90" y="-17" />
        <Accidental sign="sharp" x="120" y="20" />
      </svg>
    );
  }

  if (
    (musicKey === 'F#' && quality === 'major') ||
    (musicKey === 'D#' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="sharp" y="-42" />
        <Accidental sign="sharp" x="30" y="-5" />
        <Accidental sign="sharp" x="60" y="-54" />
        <Accidental sign="sharp" x="90" y="-17" />
        <Accidental sign="sharp" x="120" y="20" />
        <Accidental sign="sharp" x="150" y="-30" />
      </svg>
    );
  }

  if (
    (musicKey === 'C#' && quality === 'major') ||
    (musicKey === 'A#' && quality === 'minor')
  ) {
    return (
      <svg
        data-testid={`${musicKey}-${quality}-key-signature`}
        x={x}
        y={y}
        style={{ overflow: 'visible' }}
      >
        <Accidental sign="sharp" y="-42" />
        <Accidental sign="sharp" x="30" y="-5" />
        <Accidental sign="sharp" x="60" y="-54" />
        <Accidental sign="sharp" x="90" y="-17" />
        <Accidental sign="sharp" x="120" y="20" />
        <Accidental sign="sharp" x="150" y="-30" />
        <Accidental sign="sharp" x="180" y="7" />
      </svg>
    );
  }

  return <></>;
};

export default KeySignature;
