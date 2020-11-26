import React from "react";
import { Story } from '@storybook/react/types-6-0';

import Staff, {StaffProps} from "./Staff";

export default {
  component: Staff,
  title: 'Staff',
};

const StaffTemplate: Story<StaffProps> = (args) => <Staff {...args} />;

export const Default = StaffTemplate.bind({});

Default.args = {
  /* We can add props to Staff component here! Like, ```hi: "Bye"``` */
};

const WrapTemplate: Story<StaffProps> = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "20%",
      width: "100%"
    }}
  >
    <Staff {...args} />
  </div>
);

export const SizeConfigured = WrapTemplate.bind({});
SizeConfigured.args = {}; 