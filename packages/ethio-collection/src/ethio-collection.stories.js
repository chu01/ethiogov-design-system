import Component from "./ethio-collection.twig";
import FancyComponent from "./ethio-collection--fancy-date.twig";
import MediaComponent from "./ethio-collection--media.twig";
import HeadersComponent from "./ethio-collection--only-headers.twig";

export default {
  title: "Components/Collection",
};

const Template = (args) => Component(args);
const FancyTemplate = (args) => FancyComponent(args);
const MediaTemplate = (args) => MediaComponent(args);
const HeadersTemplate = (args) => HeadersComponent(args);

export const Default = Template.bind({});
export const FancyDate = FancyTemplate.bind({});
export const Media = MediaTemplate.bind({});
export const OnlyHeaders = HeadersTemplate.bind({});
