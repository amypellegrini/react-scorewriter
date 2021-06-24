import React from 'react';
import { render } from '@testing-library/react';

import Accidental from '../Accidental';

describe('Accidental sign component', () => {
  it('renders a flat accidental sign', () => {
    const { container } = render(<Accidental sign="flat" />);
    expect(container).toMatchSnapshot();
  });
  it('renders a sharp accidental sign', () => {
    const { container } = render(<Accidental sign="sharp" />);
    expect(container).toMatchSnapshot();
  });
  it('renders a natural accidental sign', () => {
    const { container } = render(<Accidental sign="natural" />);
    expect(container).toMatchSnapshot();
  });
  it('renders a double-flat accidental sign', () => {
    const { container } = render(<Accidental sign="double-flat" />);
    expect(container).toMatchSnapshot();
  });
  it('renders a double-sharp accidental sign', () => {
    const { container } = render(<Accidental sign="double-sharp" />);
    expect(container).toMatchSnapshot();
  });
});
