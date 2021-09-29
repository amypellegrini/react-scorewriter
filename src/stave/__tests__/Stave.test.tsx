import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Stave from '../Stave';
import type { StaveProps } from '../Stave';

describe('stave', () => {
  const DEFAULT_PROPS = {
    clef: 'G-clef',
    keySignature: 'C',
    keyQuality: 'major',
    commonTime: true,
  } as StaveProps;

  afterEach(() => {
    cleanup();
  });

  it('renders', () => {
    const { container } = render(<Stave {...DEFAULT_PROPS} />);
    expect(container).toMatchSnapshot();
  });

  it('contains a staff', () => {
    const { container, getByTestId } = render(<Stave {...DEFAULT_PROPS} />);

    getByTestId('staff');
    expect(container).toMatchSnapshot();
  });

  it('has the same height as the staff', () => {
    const { getByTestId } = render(<Stave {...DEFAULT_PROPS} />);

    const staveHeight = getByTestId('stave').getAttribute('height') as string;
    const staffHeight = getByTestId('staff').getAttribute('height') as string;

    expect(staffHeight).toBeDefined();
    expect(staveHeight).toEqual((1 + parseInt(staffHeight)).toString());
  });

  it('should allow contained items to overflow', () => {
    const { getByTestId } = render(<Stave {...DEFAULT_PROPS} />);

    const style = getByTestId('stave').getAttribute('style');

    expect(style).toEqual('overflow: visible;');
  });

  describe('clefs', () => {
    it('G clef is properly placed', () => {
      const { getByTestId } = render(<Stave {...DEFAULT_PROPS} />);

      const gClef = getByTestId('G-clef');
      const gClefYCoordinate = gClef.getAttribute('y');
      const gClefXCoordinate = gClef.getAttribute('x');

      expect(gClefYCoordinate).toEqual('-36');
      expect(gClefXCoordinate).toEqual('20');
    });

    it('F clef is properly placed', () => {
      const { getByTestId } = render(
        <Stave {...DEFAULT_PROPS} clef="F-clef" />,
      );

      const fClef = getByTestId('F-clef');
      const fClefYCoordinate = fClef.getAttribute('y');
      const fClefXCoordinate = fClef.getAttribute('x');

      expect(fClefYCoordinate).toEqual('1');
      expect(fClefXCoordinate).toEqual('20');
    });
  });

  describe('major key signatures', () => {
    describe('in G clef', () => {
      it('default X and Y position', () => {
        const { getByTestId } = render(
          <Stave {...DEFAULT_PROPS} keySignature="F" />,
        );

        const keySignature = getByTestId('F-major-key-signature');
        const keySignatureYCoordinate = keySignature.getAttribute('y');
        const keySignatureXCoordinate = keySignature.getAttribute('x');

        expect(keySignatureYCoordinate).toEqual('3');
        expect(keySignatureXCoordinate).toEqual('99');
      });

      describe('C Major', () => {
        it('should not render key signature', () => {
          const { queryAllByTestId } = render(<Stave {...DEFAULT_PROPS} />);

          const keySignature = queryAllByTestId('C-major-key-signature');

          expect(keySignature).toHaveLength(0);
        });
      });

      describe('F Major', () => {
        it('renders', () => {
          const { container, getByTestId, queryAllByTestId } = render(
            <Stave {...DEFAULT_PROPS} keySignature="F" />,
          );

          const flatAccidentals = queryAllByTestId('flat-accidental');

          getByTestId('F-major-key-signature');

          expect(flatAccidentals).toHaveLength(1);
          expect(container).toMatchSnapshot();
        });
      });

      describe('B♭ Major', () => {
        it('renders', () => {
          const { container, getByTestId, queryAllByTestId } = render(
            <Stave {...DEFAULT_PROPS} keySignature="B♭" />,
          );

          const flatAccidentals = queryAllByTestId('flat-accidental');

          getByTestId('B♭-major-key-signature');

          expect(flatAccidentals).toHaveLength(2);
          expect(container).toMatchSnapshot();
        });
      });

      describe('E♭ Major', () => {
        it('renders', () => {
          const { container, getByTestId, queryAllByTestId } = render(
            <Stave {...DEFAULT_PROPS} keySignature="E♭" />,
          );

          const flatAccidentals = queryAllByTestId('flat-accidental');

          getByTestId('E♭-major-key-signature');

          expect(flatAccidentals).toHaveLength(3);
          expect(container).toMatchSnapshot();
        });
      });

      describe('A♭ Major', () => {
        it('renders', () => {
          const { container, getByTestId, queryAllByTestId } = render(
            <Stave {...DEFAULT_PROPS} keySignature="A♭" />,
          );

          const flatAccidentals = queryAllByTestId('flat-accidental');

          getByTestId('A♭-major-key-signature');

          expect(flatAccidentals).toHaveLength(4);
          expect(container).toMatchSnapshot();
        });
      });

      describe('D♭ Major', () => {
        it('renders', () => {
          const { container, getByTestId, queryAllByTestId } = render(
            <Stave {...DEFAULT_PROPS} keySignature="D♭" />,
          );

          const flatAccidentals = queryAllByTestId('flat-accidental');

          getByTestId('D♭-major-key-signature');

          expect(flatAccidentals).toHaveLength(5);
          expect(container).toMatchSnapshot();
        });
      });

      describe('G♭ Major', () => {
        it('renders', () => {
          const { container, getByTestId, queryAllByTestId } = render(
            <Stave {...DEFAULT_PROPS} keySignature="G♭" />,
          );

          const flatAccidentals = queryAllByTestId('flat-accidental');

          getByTestId('G♭-major-key-signature');

          expect(flatAccidentals).toHaveLength(6);
          expect(container).toMatchSnapshot();
        });
      });

      describe('C♭ Major', () => {
        it('renders', () => {
          const { container, getByTestId, queryAllByTestId } = render(
            <Stave {...DEFAULT_PROPS} keySignature="C♭" />,
          );

          const flatAccidentals = queryAllByTestId('flat-accidental');

          getByTestId('C♭-major-key-signature');

          expect(flatAccidentals).toHaveLength(7);
          expect(container).toMatchSnapshot();
        });
      });
    });

    describe('F major in F clef', () => {
      it('Key signature Y position', () => {
        const { getByTestId } = render(
          <Stave {...DEFAULT_PROPS} clef="F-clef" keySignature="F" />,
        );

        const keySignature = getByTestId('F-major-key-signature');
        const keySignatureYCoordinate = keySignature.getAttribute('y');

        expect(keySignatureYCoordinate).toEqual('27');
      });
    });
  });

  describe('minor key signatures', () => {
    describe('C Minor', () => {
      it('should render key signature', () => {
        const { queryAllByTestId } = render(
          <Stave {...DEFAULT_PROPS} keyQuality="minor" />,
        );

        const keySignature = queryAllByTestId('C-minor-key-signature');
        const flatAccidentals = queryAllByTestId('flat-accidental');

        expect(keySignature).toHaveLength(1);
        expect(flatAccidentals).toHaveLength(3);
      });
    });
  });
});
