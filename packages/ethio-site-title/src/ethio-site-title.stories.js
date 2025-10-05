import Component from "./ethio-site-title.twig";
import Content from "./ethio-site-title.json";

export default {
  title: "Components/Site Title",
};

const Template = (args) => Component(args);

export const SiteTitle = Template.bind({});
SiteTitle.args = Content;
