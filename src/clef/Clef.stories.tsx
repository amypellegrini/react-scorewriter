import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import Clef, { ClefProps } from './Clef';

export default {
  component: Clef,
  title: 'Clef',
};

const TemplateWithWrapper: Story<ClefProps> = (args) => (
  <div style={{ width: '50px' }}>
    <Clef {...args} />
  </div>
);

export const GClef = TemplateWithWrapper.bind({});

GClef.args = {
  name: 'G-clef',
};

export const FClef = TemplateWithWrapper.bind({});

FClef.args = {
  name: 'F-clef',
};

export const CClef = TemplateWithWrapper.bind({});

CClef.args = {
  name: 'C-clef',
};
