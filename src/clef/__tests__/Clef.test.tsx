import React from 'react';
import { render, screen } from '@testing-library/react';
import { assert } from 'chai';

import Clef, { ClefName } from '../Clef';

const clefs = ['G', 'F', 'C'];

describe('Clef', () => {
  it.each(clefs)('renders a %s Clef', (clef) => {
    const clefName = `${clef}-clef` as ClefName;

    render(<Clef name={clefName} />);

    assert.ok(screen.getByTestId(clefName));
    expect(screen.getByTestId(clefName)).toMatchSnapshot();
  });

  it.each(clefs)('supports x and y props', (clef) => {
    const clefName = `${clef}-clef` as ClefName;

    render(<Clef x={32} y={64} name={clefName} />);

    const clefElement = screen.getByTestId(clefName);

    expect(clefElement.getAttribute('x')).toBe('32');
    expect(clefElement.getAttribute('y')).toBe('64');
  });
});
