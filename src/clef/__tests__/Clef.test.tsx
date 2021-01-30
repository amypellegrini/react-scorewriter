import React from 'react';
import { render, screen } from '@testing-library/react';
import { assert } from 'chai';

import Clef from '../Clef';

describe('Clef', () => {
  it('renders a G Clef', () => {
    render(<Clef name="G-clef" />);
    assert.ok(screen.getByTestId('G-clef'));
    expect(screen.getByTestId('G-clef')).toMatchSnapshot();
  });

  it('renders an F Clef', () => {
    render(<Clef name="F-clef" />);
    assert.ok(screen.getByTestId('F-clef'));
    expect(screen.getByTestId('F-clef')).toMatchSnapshot();
  });

  it('renders a C Clef', () => {
    render(<Clef name="C-clef" />);
    assert.ok(screen.getByTestId('C-clef'));
    expect(screen.getByTestId('C-clef')).toMatchSnapshot();
  });
});
