import Component from "./ethio-table--scrollable.twig";
import ScrollableDefaultContent from "./ethio-table--scrollable.json";
import ScrollableStripedContent from "./ethio-table--scrollable~striped.json";
import ScrollableCompactContent from "./ethio-table--scrollable~compact.json";
import ScrollableCompactStripedContent from "./ethio-table--scrollable~compact-striped.json";

export default {
  title: "Components/Table/Scrollable",
};

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = ScrollableDefaultContent;

export const Striped = Template.bind({});
Striped.args = {
  ...ScrollableDefaultContent,
  ...ScrollableStripedContent,
};

export const Compact = Template.bind({});
Compact.args = {
  ...ScrollableDefaultContent,
  ...ScrollableCompactContent,
};

export const CompactStriped = Template.bind({});
CompactStriped.args = {
  ...ScrollableDefaultContent,
  ...ScrollableCompactStripedContent,
};
