import React from 'react';
import { render, cleanup } from '@testing-library/react';
import KeySignature from '../KeySignature';

describe('Key Signature', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders F Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="F" quality="major" />,
    );

    const flatAccidentals = queryAllByTestId('flat-accidental');
    const sharpAccidentals = queryAllByTestId('sharp-accidental');

    getByTestId('F-major-key-signature');

    expect(sharpAccidentals).toHaveLength(0);
    expect(flatAccidentals).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  it('renders B♭ Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="B♭" quality="major" />,
    );

    const flatAccidentals = queryAllByTestId('flat-accidental');
    const sharpAccidentals = queryAllByTestId('sharp-accidental');

    getByTestId('B♭-major-key-signature');

    expect(sharpAccidentals).toHaveLength(0);
    expect(flatAccidentals).toHaveLength(2);
    expect(container).toMatchSnapshot();
  });

  it('renders E♭ Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="E♭" quality="major" />,
    );

    const flatAccidentals = queryAllByTestId('flat-accidental');
    const sharpAccidentals = queryAllByTestId('sharp-accidental');

    getByTestId('E♭-major-key-signature');

    expect(sharpAccidentals).toHaveLength(0);
    expect(flatAccidentals).toHaveLength(3);
    expect(container).toMatchSnapshot();
  });

  it('renders A♭ Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="A♭" quality="major" />,
    );

    const flatAccidentals = queryAllByTestId('flat-accidental');
    const sharpAccidentals = queryAllByTestId('sharp-accidental');

    getByTestId('A♭-major-key-signature');

    expect(sharpAccidentals).toHaveLength(0);
    expect(flatAccidentals).toHaveLength(4);
    expect(container).toMatchSnapshot();
  });

  it('renders D♭ Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="D♭" quality="major" />,
    );

    const flatAccidentals = queryAllByTestId('flat-accidental');
    const sharpAccidentals = queryAllByTestId('sharp-accidental');

    getByTestId('D♭-major-key-signature');

    expect(sharpAccidentals).toHaveLength(0);
    expect(flatAccidentals).toHaveLength(5);
    expect(container).toMatchSnapshot();
  });

  it('renders G♭ Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="G♭" quality="major" />,
    );

    const flatAccidentals = queryAllByTestId('flat-accidental');
    const sharpAccidentals = queryAllByTestId('sharp-accidental');

    getByTestId('G♭-major-key-signature');

    expect(flatAccidentals).toHaveLength(6);
    expect(sharpAccidentals).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it('renders C♭ Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="C♭" quality="major" />,
    );

    const flatAccidentals = queryAllByTestId('flat-accidental');
    const sharpAccidentals = queryAllByTestId('sharp-accidental');

    getByTestId('C♭-major-key-signature');

    expect(flatAccidentals).toHaveLength(7);
    expect(sharpAccidentals).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it('renders G Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="G" quality="major" />,
    );

    const sharpAccidentals = queryAllByTestId('sharp-accidental');
    const flatAccidentals = queryAllByTestId('flat-accidental');

    getByTestId('G-major-key-signature');

    expect(sharpAccidentals).toHaveLength(1);
    expect(flatAccidentals).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it('renders D Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="D" quality="major" />,
    );

    const sharpAccidentals = queryAllByTestId('sharp-accidental');
    const flatAccidentals = queryAllByTestId('flat-accidental');

    getByTestId('D-major-key-signature');

    expect(sharpAccidentals).toHaveLength(2);
    expect(flatAccidentals).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it('renders A Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="A" quality="major" />,
    );

    const sharpAccidentals = queryAllByTestId('sharp-accidental');
    const flatAccidentals = queryAllByTestId('flat-accidental');

    getByTestId('A-major-key-signature');

    expect(sharpAccidentals).toHaveLength(3);
    expect(flatAccidentals).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it('renders E Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="E" quality="major" />,
    );

    const sharpAccidentals = queryAllByTestId('sharp-accidental');
    const flatAccidentals = queryAllByTestId('flat-accidental');

    getByTestId('E-major-key-signature');

    expect(sharpAccidentals).toHaveLength(4);
    expect(flatAccidentals).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it('renders B Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="B" quality="major" />,
    );

    const sharpAccidentals = queryAllByTestId('sharp-accidental');
    const flatAccidentals = queryAllByTestId('flat-accidental');

    getByTestId('B-major-key-signature');

    expect(sharpAccidentals).toHaveLength(5);
    expect(flatAccidentals).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it('renders F# Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="F#" quality="major" />,
    );

    const sharpAccidentals = queryAllByTestId('sharp-accidental');
    const flatAccidentals = queryAllByTestId('flat-accidental');

    getByTestId('F#-major-key-signature');

    expect(sharpAccidentals).toHaveLength(6);
    expect(flatAccidentals).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it('renders C# Major key', () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <KeySignature musicKey="C#" quality="major" />,
    );

    const sharpAccidentals = queryAllByTestId('sharp-accidental');
    const flatAccidentals = queryAllByTestId('flat-accidental');

    getByTestId('C#-major-key-signature');

    expect(sharpAccidentals).toHaveLength(7);
    expect(flatAccidentals).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it('should not render C major key', () => {
    const { queryAllByTestId } = render(
      <KeySignature musicKey="C" quality="major" />,
    );
    expect(queryAllByTestId('C-major-key-signature').length).toEqual(0);
  });

  describe('Minor keys', () => {
    it('renders C minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="C" quality="minor" />,
      );

      const flatAccidentals = queryAllByTestId('flat-accidental');
      const sharpAccidentals = queryAllByTestId('sharp-accidental');

      getByTestId('C-minor-key-signature');

      expect(sharpAccidentals).toHaveLength(0);
      expect(flatAccidentals).toHaveLength(3);
      expect(container).toMatchSnapshot();
    });

    it('renders F minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="F" quality="minor" />,
      );

      const flatAccidentals = queryAllByTestId('flat-accidental');
      const sharpAccidentals = queryAllByTestId('sharp-accidental');

      getByTestId('F-minor-key-signature');

      expect(sharpAccidentals).toHaveLength(0);
      expect(flatAccidentals).toHaveLength(4);
      expect(container).toMatchSnapshot();
    });

    it('renders B♭ minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="B♭" quality="minor" />,
      );

      const flatAccidentals = queryAllByTestId('flat-accidental');
      const sharpAccidentals = queryAllByTestId('sharp-accidental');

      getByTestId('B♭-minor-key-signature');

      expect(sharpAccidentals).toHaveLength(0);
      expect(flatAccidentals).toHaveLength(5);
      expect(container).toMatchSnapshot();
    });

    it('renders E♭ minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="E♭" quality="minor" />,
      );

      const flatAccidentals = queryAllByTestId('flat-accidental');
      const sharpAccidentals = queryAllByTestId('sharp-accidental');

      getByTestId('E♭-minor-key-signature');

      expect(flatAccidentals).toHaveLength(6);
      expect(sharpAccidentals).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });

    it('renders A♭ minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="A♭" quality="minor" />,
      );

      const flatAccidentals = queryAllByTestId('flat-accidental');
      const sharpAccidentals = queryAllByTestId('sharp-accidental');

      getByTestId('A♭-minor-key-signature');

      expect(flatAccidentals).toHaveLength(7);
      expect(sharpAccidentals).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });

    it('should not render D♭ minor key', () => {
      const { queryAllByTestId } = render(
        <KeySignature musicKey="D♭" quality="minor" />,
      );
      expect(queryAllByTestId('D♭-minor-key-signature').length).toEqual(0);
    });

    it('should not render G♭ minor key', () => {
      const { queryAllByTestId } = render(
        <KeySignature musicKey="G♭" quality="minor" />,
      );
      expect(queryAllByTestId('G♭-minor-key-signature').length).toEqual(0);
    });

    it('renders B minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="B" quality="minor" />,
      );

      const flatAccidentals = queryAllByTestId('flat-accidental');
      const sharpAccidentals = queryAllByTestId('sharp-accidental');

      getByTestId('B-minor-key-signature');

      expect(flatAccidentals).toHaveLength(0);
      expect(sharpAccidentals).toHaveLength(2);
      expect(container).toMatchSnapshot();
    });

    it('renders E minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="E" quality="minor" />,
      );

      const flatAccidentals = queryAllByTestId('flat-accidental');
      const sharpAccidentals = queryAllByTestId('sharp-accidental');

      getByTestId('E-minor-key-signature');

      expect(flatAccidentals).toHaveLength(0);
      expect(sharpAccidentals).toHaveLength(1);
      expect(container).toMatchSnapshot();
    });

    it('should not render A minor key', () => {
      const { queryAllByTestId } = render(
        <KeySignature musicKey="A" quality="minor" />,
      );
      expect(queryAllByTestId('A-minor-key-signature')).toHaveLength(0);
    });

    it('renders D minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="D" quality="minor" />,
      );

      const flatAccidentals = queryAllByTestId('flat-accidental');
      const sharpAccidentals = queryAllByTestId('sharp-accidental');

      getByTestId('D-minor-key-signature');

      expect(flatAccidentals).toHaveLength(1);
      expect(sharpAccidentals).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });

    it('renders G minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="G" quality="minor" />,
      );

      const flatAccidentals = queryAllByTestId('flat-accidental');
      const sharpAccidentals = queryAllByTestId('sharp-accidental');

      getByTestId('G-minor-key-signature');

      expect(flatAccidentals).toHaveLength(2);
      expect(sharpAccidentals).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });

    it('renders F# minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="F#" quality="minor" />,
      );

      const sharpAccidentals = queryAllByTestId('sharp-accidental');
      const flatAccidentals = queryAllByTestId('flat-accidental');

      getByTestId('F#-minor-key-signature');

      expect(sharpAccidentals).toHaveLength(3);
      expect(flatAccidentals).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });

    it('renders C# minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="C#" quality="minor" />,
      );

      const sharpAccidentals = queryAllByTestId('sharp-accidental');
      const flatAccidentals = queryAllByTestId('flat-accidental');

      getByTestId('C#-minor-key-signature');

      expect(sharpAccidentals).toHaveLength(4);
      expect(flatAccidentals).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });

    it('renders D# minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="D#" quality="minor" />,
      );

      const sharpAccidentals = queryAllByTestId('sharp-accidental');
      const flatAccidentals = queryAllByTestId('flat-accidental');

      getByTestId('D#-minor-key-signature');

      expect(sharpAccidentals).toHaveLength(6);
      expect(flatAccidentals).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });

    it('renders G# minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="G#" quality="minor" />,
      );

      const sharpAccidentals = queryAllByTestId('sharp-accidental');
      const flatAccidentals = queryAllByTestId('flat-accidental');

      getByTestId('G#-minor-key-signature');

      expect(sharpAccidentals).toHaveLength(5);
      expect(flatAccidentals).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });

    it('renders A# minor key', () => {
      const { container, getByTestId, queryAllByTestId } = render(
        <KeySignature musicKey="A#" quality="minor" />,
      );

      const sharpAccidentals = queryAllByTestId('sharp-accidental');
      const flatAccidentals = queryAllByTestId('flat-accidental');

      getByTestId('A#-minor-key-signature');

      expect(sharpAccidentals).toHaveLength(7);
      expect(flatAccidentals).toHaveLength(0);
      expect(container).toMatchSnapshot();
    });
  });
});
