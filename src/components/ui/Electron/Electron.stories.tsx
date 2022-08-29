import { Electron, ElectronProps } from "./Electron";

import { Meta, Story } from "@storybook/react";

export default {
  title: "Electron",
  component: Electron,
} as Meta;

const Template: Story<ElectronProps> = (args) => <Electron {...args} />;

export const Negative = Template.bind({});

export const Positive = Template.bind({});
Positive.args = {
  valence: +1,
};
