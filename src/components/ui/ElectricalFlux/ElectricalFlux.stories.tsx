import { ElectricalFlux, ElectricalFluxProps } from "./ElectricalFlux";
import { number, withKnobs } from "@storybook/addon-knobs";

import { Meta, Story } from "@storybook/react";

export default {
  title: "ElectricalFlux",
  component: ElectricalFlux,
  argTypes: {
    valence: {
      type: "number",
    },
  },
} as Meta;

const Template: Story<ElectricalFluxProps> = (args) => (
  <ElectricalFlux {...args} />
);

export const Negative = Template.bind({});
Negative.args = {
  valence: -1,
};
