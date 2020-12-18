import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import Staff, { StaffProps } from './Staff';

export default {
  component: Staff,
  title: 'Staff',
};

const StaffTemplate: Story<StaffProps> = (args) => <Staff {...args} />;

export const Default = StaffTemplate.bind({});

Default.args = {
  /* We can add props to Staff component here! Like, ```hi: "Bye"``` */
};

const TemplateWithSizeWrapper: Story<StaffProps> = (args) => (
  <div
    style={{
      width: '100%',
      height: 100,
    }}
  >
    <Staff {...args} />
  </div>
);

export const FullStretch = TemplateWithSizeWrapper.bind({});
FullStretch.args = {
  height: '100px',
  width: '100%',
};

export const DefinedSize = TemplateWithSizeWrapper.bind({});
DefinedSize.args = {
  height: '40px',
  width: '100%',
  preserveAspectRatio: 'xMidYMid meet',
};
