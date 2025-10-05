import Component from "./ethio-accordion.twig";
import { DefaultContent, BorderedContent, MultiContent } from "./content";

import IconTest from "./test/test-patterns/test-accordion-icon.twig";
import HeaderContent from "../../ethio-header/src/ethio-header.json";
import BannerContent from "../../ethio-banner/src/content/ethio-banner.json";

export default {
  title: "Components/Accordion",
};

const Template = (args) => Component(args);
const TestTemplate = (args) => IconTest(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const Bordered = Template.bind({});
Bordered.args = BorderedContent;

export const Multiselectable = Template.bind({});
Multiselectable.args = MultiContent;

export const TestIcons = TestTemplate.bind({});
TestIcons.args = {
  ...DefaultContent,
  ...HeaderContent,
  ...BannerContent,
};
