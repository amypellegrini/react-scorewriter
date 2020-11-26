import React from "react";
import { Story } from '@storybook/react/types-6-0';

import Staff, {StaffProps} from "./Staff";

export default {
  component: Staff,
  title: 'Staff',
};

const Template: Story<StaffProps> = (args) => <Staff {...args} />;

export const Default = Template.bind({});

Default.args = {
  /* We can add props to Staff component here! Like, ```hi: "Bye"``` */
};
