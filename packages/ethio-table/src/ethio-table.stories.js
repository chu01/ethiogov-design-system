import Component from "./ethio-table.twig";
import SortableComponent from "./ethio-table--sortable/ethio-table--sortable.twig";
import SortableContent from "./ethio-table--sortable/ethio-table--sortable.json";
import DefaultContent from "./ethio-table.json";
import BorderlessContent from "./ethio-table~borderless.json";
import StripedContent from "./ethio-table~striped.json";
import StickyHeaderContent from "./ethio-table~stickyheader.json";
import TestMultipleStickyRowsComponent from "./test/test-patterns/test-ethio-table--multiple-sticky-headers.twig";

export default {
  title: "Components/Table",
  argTypes: {
    scrollable: {
      name: "Scrollable (Turning this on will disable sticky headers)",
      control: { type: "boolean" },
      defaultValue: false,
    },
    sticky_header: {
      name: "Sticky header",
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

const Template = (args) => Component(args);
const SortableTemplate = (args) => SortableComponent(args);
const TestMultipleStickyRowsTemplate = (args) =>
  TestMultipleStickyRowsComponent(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const Borderless = Template.bind({});
Borderless.args = BorderlessContent;

export const Striped = Template.bind({});
Striped.args = StripedContent;

export const StickyHeader = Template.bind({});
StickyHeader.args = {
  ...DefaultContent,
  ...StickyHeaderContent,
};

export const Sortable = SortableTemplate.bind({});
Sortable.args = {
  ...SortableContent,
};

export const TestStickyHeaderMultipleRows = TestMultipleStickyRowsTemplate.bind(
  {},
);
TestStickyHeaderMultipleRows.argTypes = {
  sticky_header: {
    defaultValue: true,
  },
  scrollable: {
    table: { disable: true },
  },
};
