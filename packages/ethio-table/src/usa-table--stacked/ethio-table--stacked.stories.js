import Component from "./ethio-table--stacked.twig";
import StackedDefaultContent from "./ethio-table--stacked.json";
import StackedBorderlessContent from "./ethio-table--stacked~borderless.json";
import StackedHeaderContent from "./ethio-table--stacked~header.json";
import StackedHeaderBorderlessContent from "./ethio-table--stacked~header-borderless.json";

export default {
  title: "Components/Table/Stacked",
};

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = StackedDefaultContent;

export const Borderless = Template.bind({});
Borderless.args = StackedBorderlessContent;

export const WithHeader = Template.bind({});
WithHeader.args = StackedHeaderContent;

export const withHeaderBorderless = Template.bind({});
withHeaderBorderless.args = StackedHeaderBorderlessContent;
